const employee = {
    empName: 'Reena',
    empSalary: 30000,
    empTeamLead: 'Pavan kumar'
};

// const{empName,empSalary,empTeamLead}=employee;
// console.log(`name: ${empName} salary:${empSalary} empTeamLead:${empTeamLead}`);

const{empName:name,empSalary:salary,empTeamLead:TeamLead}=employee;
console.log(`name: ${name} salary:${salary} empTeamLead:${TeamLead}`);


let{height,width,title}= {title:"menu", height: 200 , width: 100}
console.log(height);


