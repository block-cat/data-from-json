import app from 'flarum/app';
import Settings from './components/Settings';

app.initializers.add('block-cat/data-from-json', () => {
  app.extensionData.for('block-cat-data-from-json')
    .registerPage(Settings);
});