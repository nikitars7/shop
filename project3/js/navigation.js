// ScrollOnClick (navigation)
let link = document.querySelectorAll('._goto-block');
if(link){
	let blocks = [];
	for(let index = 0; index < link.length; index++){
		let el = link[index];
		let block_name = el.getAttribute('href').replace('#','');
		if(block_name != '' && !~blocks.indexOf(block_name)){
			blocks.push(block_name);
		}
		el.addEventListener('click', function(e){
			if(document.querySelector('.menu__body.active')){
				menu_close();
				body_lock_remove(500);
			}
			let target_block_class = el.getAttribute('href').replace('#','');
			let target_block = document.querySelector('.'+target_block_class);
			goto(target_block,300);
			e.preventDefault();
		})
	}
	window.addEventListener('scroll',function(el){
		let old_current_link = document.querySelectorAll('._goto-block._active');
		if(old_current_link){
			for(let index = 0; index < old_current_link.length;index++){
				let el = old_current_link[index];
				el.classList.remove('_active');
			}
		}
		for(let index = 0; index < blocks.length; index++){
			let block = blocks[index];
			let block_item = document.querySelector('.'+ block);
			if(block_item){
				let block_offset = offset(block_item.top);
				let block_height = block_item.offsetHeight;
				if((pageYOffset > block_offset - window.innerHeight/3) && pageYOffset < ( block_offset + block_height) - window.innerHeight /3){
                 let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
                 for(let index = 0; index< current_links.length;index ++){
                    let current_link = current_links[index];
                    current_link.classList.add('_active');
                 }
				}
			}
		}
	})
}

//scrollonClick (simple)
