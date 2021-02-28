/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

let createEmployeeRecord = function(employee) {
   return { firstName : employee[0],
    familyName : employee[1],
    title : employee[2],
    payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employees){
    return employees.map(createEmployeeRecord)
}

let createTimeInEvent = function(clockIn){
    let dateTime = clockIn.split(" ")
    let dateIn = dateTime[0]
    let timeIn = parseInt(dateTime[1], 10)

    this.timeInEvents.push({ type: "TimeIn",date : dateIn, hour : timeIn});
    return this

}

let createTimeOutEvent = function(clockOut){
    let dateTime = clockOut.split(" ")
    let dateOut = dateTime[0]
    let timeOut = parseInt(dateTime[1], 10)

    this.timeOutEvents.push({ type: "TimeOut",date : dateOut, hour : timeOut});
    return this
}

let hoursWorkedOnDate = function(date){
    let timeIn = this.timeInEvents.find(e => e.date === date)
    let timeOut = this.timeOutEvents.find(e => e.date === date)
    return (timeOut.hour - timeIn.hour)/100
}

let wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let findEmployeeByFirstName = function(employees, name){
    return employees.find(e => e.firstName = name)
}

let calculatePayroll = function(employees){
    let totalPay = employees.map(e => allWagesFor.call(e))
    const total = (accum, current) => accum + current

    return totalPay.reduce(total)
    

}

