import ExtensionPage from 'flarum/components/ExtensionPage';
import Button from 'flarum/components/Button';
import app from 'flarum/app';
import sortTags from 'flarum/tags/utils/sortTags';
import Switch from 'flarum/components/Switch';
import icon from 'flarum/helpers/icon';

export default class Settings extends ExtensionPage {
  oninit(vnode) {
    super.oninit(vnode);

    this.prim = 0;
    this.second = 0;
    sortTags(app.store.all('tags')).map((tag) => {
      if (tag.isPrimary()) {
        this.prim++;
      }
      else {
        this.second++;
      }
    });
    
    this.disable = true;
    this.loading = false;
    this.tagsPrimary = [];
    this.tagsSecondary = [];
    this.tagsPrimaryIds = [];
    this.tagsSecondaryIds = [];
    this.jsonFile = '';
  }

  content() {
    return [
      m('.ExtensionPage-settings', [
        m('.container', [
          m('Form', {
            onsubmit: this.onsubmit.bind(this),
          }, [
            m('.Form-group', [
              m('label', app.translator.trans('data-from-json.admin.settings.file_name_label')),
              m('.helpText', app.translator.trans('data-from-json.admin.settings.file_name_help_text')),
              m('button.Button.jsonFile', {
                  type: 'button',
                  onclick: () => this.$('#jsonFile').click()
                }, [
                m('span', 'Alege fisier'),
                m('input', {
                  id: 'jsonFile',
                  type: 'file',
                  accept: '.json',
                  multiple: false,
                  oninput: () => {
                    try {
                      if (this.$('#jsonFile').prop('files')[0].type == 'application/json') {
                        this.jsonFile = this.$('#jsonFile').prop('files')[0];
                        this.$('#jsonFile').val('');
                        this.disable = false;
                      } else {
                        this.jsonFile = '';
                        this.disable = true;
                      }
                    } catch {
                      this.jsonFile = '';
                      this.disable = true;
                    }
                  }
                }),
              ]),
            ]),
            (this.prim > 0) ? m('.Form-group', [
              m('label', app.translator.trans('data-from-json.admin.settings.primary_tags_label')),
              m('.helpText', app.translator.trans('data-from-json.admin.settings.primary_tags_help_text') + app.forum.attribute('maxPrimaryTags')),
              m('.TagGroup', [
                m('ul.TagList', [
                  sortTags(app.store.all('tags')).map((tag) => {
                    const tags = this.tagsPrimary;
                    const tagsIds = this.tagsPrimaryIds;
                    if (tag.isPrimary()) {
                      return [
                        Switch.component({
                          id: tag.slug(),
                          state: (tags.length) ? tags.includes(tag.slug()) : false,
                          onchange: function() {
                            (this.state) ?
                              tags.splice(tags.indexOf(this.id), 1) && tagsIds.splice(tagsIds.indexOf(tag.id()), 1) :
                              tags.push(this.id) && tagsIds.push(tag.id());
                            (tags.length > app.forum.attribute('maxPrimaryTags')) ?
                              tags.shift() && tagsIds.shift() : '';
                          },
                          className: 'switchTags'
                        },
                        m('li', {
                          style: {
                            color: tag.color(),
                            lineHeight: '20px',
                            fontSize: '16px',
                            marginLeft: !(tag.isPrimary() || tag.position() === null) ? '20px' : '',
                          }
                        }, icon(tag.icon()), tag.name())
                        )
                      ];
                    }
                  })
                ]),
              ]),
            ]) : '',
            (this.second > 0) ? m('.Form-group', [
              m('label', app.translator.trans('data-from-json.admin.settings.secondary_tags_label')),
              m('.helpText', app.translator.trans('data-from-json.admin.settings.secondary_tags_help_text') + app.forum.attribute('maxSecondaryTags')),
              m('.TagGroup', [
                m('ul.TagList', [
                  sortTags(app.store.all('tags')).map((tag) => {
                    const tags = this.tagsSecondary;
                    const tagsIds = this.tagsSecondaryIds;
                    if (!tag.isPrimary()) {
                      return [
                        Switch.component({
                          id: tag.slug(),
                          state: (tags.length) ? tags.includes(tag.slug()) : false,
                          onchange: function() {
                            (this.state) ?
                              tags.splice(tags.indexOf(this.id), 1) && tagsIds.splice(tagsIds.indexOf(tag.id()), 1) :
                              tags.push(this.id) && tagsIds.push(tag.id());
                            (tags.length > app.forum.attribute('maxSecondaryTags')) ?
                              tags.shift() && tagsIds.shift() : '';
                          },
                          className: 'switchTags',
                        },
                        m('li', {
                          style: {
                            color: tag.color(),
                            lineHeight: '20px',
                            fontSize: '16px',
                            marginLeft: !(tag.isPrimary() || tag.position() === null) ? '20px' : '',
                          }
                        }, icon(tag.icon()), tag.name())
                        )
                      ];
                    }
                  })
                ]),
              ]),
            ]) : '',
            m('.Form-group', [
              m('.helpText', app.translator.trans('data-from-json.admin.settings.attention')),
            ]),
            Button.component(
              {
                type: 'submit',
                className: 'Button Button--primary',
                loading: this.loading,
                disabled: this.disable,
              },
              app.translator.trans('data-from-json.admin.settings.submit_button')
            ),
          ]),
        ]),
      ])
    ]
  };

  onsubmit(e) {
    e.preventDefault();
    this.loading = true;

    let data = new FormData();
    data.append('file_name', this.fileName);
    data.append('tags_primary_ids', this.tagsPrimaryIds);
    data.append('tags_secondary_ids', this.tagsSecondaryIds);
    data.append('file[]', this.jsonFile);

    app.request({
      url: app.forum.attribute('apiUrl') + '/json-data',
      method: 'POST',
      body: data
    }).then(() => {
      this.disable = true;
      this.loading = false;
      this.tagsPrimary = [];
      this.tagsSecondary = [];
      this.tagsPrimaryIds = [];
      this.tagsSecondaryIds = [];
      this.jsonFile = '';

      m.redraw();
    }).catch(e => {
      this.loading = false;
      this.disable = true;
      this.tagsPrimary = [];
      this.tagsSecondary = [];
      this.tagsPrimaryIds = [];
      this.tagsSecondaryIds = [];
      this.jsonFile = '';

      m.redraw();
      throw e;
    });
  }
}