(()=>{
    type Gender= "M" | "F"
    class Person{
        constructor(
        public name: string,
        public gender:Gender,
        public birthdate: Date
        ){}

    }
    const newPerson= new Person('Angela','F',new Date('1997-02-11'))
    console.log({newPerson})
})()