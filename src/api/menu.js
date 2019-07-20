const Menu = [
    { heading: "Dashboard" },
    { icon: "fa-users", to: "/", text: "Collaborators" },
    { icon: "fa-project-diagram", to: "/projects", text: "Projects" },
    { icon: "school", to: "researches", text: "Researches" },
    /*{
        icon: "keyboard_arrow_up",
        "icon-alt": "keyboard_arrow_down",
        text: "Student Chapter",
        model: true,
        children: [
            { icon: "business", text: "Partners" },
            { icon: "device_hub", text: "Divisions" },
            { icon: "attach_money", text: "Finances" },
            { icon: "people", text: "Members" }
        ]
    },*/
    { icon: "settings", text: "Settings" },
    { icon: "help", text: "Help" }

];
// reorder menu
Menu.forEach((item) => {
    if (item.items) {
        item.items.sort((x, y) => {
            let textA = x.text.toUpperCase();
            let textB = y.text.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }
});

export default Menu;
