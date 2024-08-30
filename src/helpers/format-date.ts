const formatDate = (date: Date = new Date()): string => {
    console.log("date: " + date)
    const ddd = new Date(date);
    return `${ddd.getDate()}/${ddd.getMonth()+1}/${ddd.getFullYear()}`
}

export default formatDate;