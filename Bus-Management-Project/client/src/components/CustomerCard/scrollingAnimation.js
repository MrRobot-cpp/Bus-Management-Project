
//function
export function addAnimation() {
    console.log('addAnimation function called'); 
    const scrollers = document.querySelectorAll('.customer-card-scroller');

    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const innerScroller = scroller.querySelector('.customer-card-inner-scroller');

        // Check if innerScroller exists before accessing its children
            const scrollerContent = Array.from(innerScroller.children);

            scrollerContent.forEach(item => {
                const duplicateItem = item.cloneNode(true);
                duplicateItem.setAttribute('aria-hidden', true);
                innerScroller.appendChild(duplicateItem);
                console.log('components have been duplicated');
            });
        
    });
}

