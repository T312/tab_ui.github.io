const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-items")
const panes = $$(".tab-pane")
const tabActive = $(".tab-items.active")
const line  = $(".tabs .line") 

line.style.left = tabActive.offsetLeft + "px"
line.style.width = tabActive.offsetWidth + "px"



console.log(tabActive)

tabs.forEach((tab, index)   => {
    const pane = panes[index];
    tab.onclick = () => {
        $(".tab-items.active").classList.remove("active")
        tab.classList.add("active")
        line.style.left = tab.offsetLeft + "px"
        line.style.width = tab.offsetWidth + "px"
        $(".tab-pane.active").classList.remove("active")
        pane.classList.add("active")
    }
})

