import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('projects', function() {
    this.route('new');
    // this.resource('templates', {path: '/new/templates'}, function() {});

    this.resource('project', {path: '/:project_id'}, function() {
      this.route('edit');
      this.route('archive');
      this.route('delete');

      this.resource('sprints', function() {
        this.route('new');

        this.resource('sprint', {path: '/:sprint_id'}, function() {
          this.route('edit');
          this.route('archive');
          this.route('delete');

          this.resource('columns', function() {
            this.route('new');

            this.resource('column', {path: '/:column_id'}, function() {
              this.route('edit');
              this.route('archive');
              this.route('delete');

              this.resource('tasks', function() {
                this.route('new');

                this.resource('task', {path: '/:task_id'}, function() {
                  this.route('related');
                  this.route('edit');
                  this.route('archive');
                  this.route('delete');

                  this.resource('comments', function() {
                    this.route('new');

                    this.resource('comment', {path: '/:comment_id'}, function() {
                      this.route('edit');
                      this.route('archive');
                      this.route('delete');
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  this.resource('users', function() {});
  this.resource('tags', function() {});
});