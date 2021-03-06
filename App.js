Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

	launch: function() {
		console.log('Our first app');
		this.loadData();
	},

	//Get Data from Rally
   	loadData: function() {
	 var myStore = Ext.create('Rally.data.wsapi.Store', {
          model: 'User Story',
          autoLoad: true,
          listeners: {
            load: function(myStore, myData, success) {
            console.log('got data!', myStore, myData, success);
            this.loadGrid(myStore);
	    },
            //changes scope to be app so that the grid will load in the UI
	    scope: this
           },
    	fetch: ['Name', 'ScheduleState']
	});	
     },
	
	//Create and show grid of stories
	loadGrid: function(myStoryStore){
	var myGrid = Ext.create('Rally.ui.grid.Grid', {
		   store: myStoryStore,
		   columnCfgs: [
			   'FormattedId', 'Name', 'ScheduleState'
		   ]
          });
         
         this.add(myGrid);
	 console.log('what is this', this);
	}
	
})
