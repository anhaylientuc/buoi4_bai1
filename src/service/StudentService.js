export let students = [
  { id: 1, name: "Nguyen Van A", age: 20, subject: "CNTT1" },
  { id: 2, name: "Tran Thi B", age: 21, subject: "CNTT2" },
  { id: 3, name: "Le Van C", age: 19, subject: "CNTT1" },
  { id: 4, name: "Pham Van D", age: 22, subject: "CNTT3" },
];
export const getAll=()=>{
    return students;
}
export const insert=(value)=>{
    students.push(value)
}
export const remove=(id)=>{
    students=students.filter((e,index)=>index!=id);
}
export const edit=(id,value)=>{
    students=students.map((e,index)=>{
        if(index==id)
            return value;
        return e;
    })
}