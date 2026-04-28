var atlas = require("atlas");

// init content
require("content");

Events.on(EventType.ClientLoadEvent, 
cons(e => {
	Log.info("Client load")
	});

	utils.eachType(ContentType.item, item=>{
		atlas.setupIcon("item",item.name,item.fullIcon);
	});

	blocks_init();
