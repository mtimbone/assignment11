


async function buildGrid() {
    try {
        
        const response = await fetch("../data/employees.json");
        
        const employees = await response.json();
        for (let user of users) {
            document.body.innerHTML += 
            `${user.ID}<br>${user.ID}<br>
            ${user.Name}<br>${user.Name}<br>
            ${user.Ext}<br>${user.Ext}<br>
            ${user.Email}<br>${user.Email}<br>
            ${user.Department}<br>${user.Department}<br><br>`;
        } 
    }  catch (error) {
        console.error(error);
    }

}
buildGrid();

