(function() {
    'use strict';

    /**
     * Module      : alto.technical.model
     * Factory     : ProjectsModel
     * Description : This Factory provide the model for user
     */
    angular.module('alto.technical.model').factory('ProjectsModel', ProjectsModel);

    /* @ngInject */
    function ProjectsModel() {
        
        /*************************
         *     PUBLIC VARIABLE    *
         **************************/


        /*************************
         *     PRIVATE VARIABLE   *
         **************************/


        /*************************
         *     SERVICE RETURN     *
         **************************/
        
        // This model is an Objects that contains all non-sensible user informations
        // The object model should be : 
        // {
        //  userProjects: {
        //      [
        //          projectName: ""
        //      ],
        //      [
        //          projectName: ""
        //      ],
        //  },
        //  openProjects: {
        //      [
        //          projectName: ""
        //      ],
        //      [
        //          projectName: ""
        //      ],
        //  }
        // }
        var projects = {
            userProjects: [
                {
                    projectName: 'project one'
                }
            ],
            openProjects: null
        };

        return projects;

        /*************************
         *     PUBLIC METHOD      *
         **************************/


        /*************************
         *     PRIVATE METHOD     *
         **************************/

    }

})();