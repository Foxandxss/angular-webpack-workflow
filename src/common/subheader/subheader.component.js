const SubHeaderComponent = {
    template:`
        <md-toolbar class="subheader">
            <div class="md-toolbar-tools" layout="row" layout-xs="column" flex>
                <!--<span flex="none">Don't forget to</span>
                <span class="text-link" fex="none">update your assets !</span>-->
                <md-button class="update">
                    <md-icon md-svg-src="../assets/img/update.svg"></md-icon>
                    <span>Update your assets</span>
                </md-button>
                <span class="separator-sub"></span>
                <span class="date"> View at </span>
                <md-datepicker class="myDatePicker" ng-model="myDate" md-placeholder="Enter date"
                               md-min-date="minDate" md-max-date="maxDate"></md-datepicker>
                <span flex></span>
                <span class="separator-sub"></span>
                <img src="../assets/img/imprimer.png"/>
                <span class="text-link">Print</span>
            </div>
        </md-toolbar>
    `
};

export default SubHeaderComponent;