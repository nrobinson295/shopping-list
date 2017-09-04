$(document).ready(function() {
 /*Interface (UI)
        #AddItemForm
            name input box
            price input box 
            add button (runs addItemToList) */
    var list = [];

    function addItemToList(name, price){
    	var item = {
    		name: name,
    		price: price
    	};
    	list.push(item);
    	console.log(list);
    	$('.list').append('<li><div class="item-name">' + name + '</div><div class="item-price">' + price + '</div></li>');
   			
    }

       	$('.list').click(function(item){
    		//var item.selected = $('.li')
    		// i think i need a var or need to make a function to run the if/else statement
    		if (item.selected == false) {
    			item.selected = true
    		}
    		else if (item.selected == true) {
    			item.selected = false
    		}
    		console.log('list');
    	})
    





	$('button').click(function() {
		var name = $('.txt-item-name').val();
		var price = $('.txt-item-price').val();
		addItemToList(name, price);
		console.log(name, price);	
	});
});
/*        #ListView
        List View 
            Click to select the item
            Click to deslect the item 

remove 
        #ViewTotal
        View of the Total 
            Shows the total cost of items in the that are selected

    Software (Logic)
        addItemToList()
            add new item to list 
                get input name
                get input price
                set selected = false 
            refreshEverything

        showListItems(listItems)
            for each thing in listItems
            add it to #ListView
            bind it to a click event that runs
                toggleItem 

        toggleItem(item)
            get the item thats clicked
            if(item.selected == false)              
                {           
                item.selected = true
            } else if(item.selected == true){
                item.selected = false 
            }

            updateTotal
            refreshEverything


        updateTotal(listItems)
            set total to 0
            for each thing in listItems
                if(item.selected == true)                
                add the price to total
            
            
        showTotal
            set the html of #ViewTotal to total 

        refreshEverything()
            showItems(listItems)
            showTotal
        
    Data
        item
            name ("Eggs")
            price (0.00)
            selected (true/false)

        listItems [8]
           item */



























