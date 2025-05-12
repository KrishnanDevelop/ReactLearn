import ArrayComponent from "./ArrayComponent";
import Car from "./Car"
import ClassComponent from "./ClassComponent"
import ClassState from "./ClassState";
import MyForm from "./MyForm";
import Scooter from "./Scooter";
import StateLearn from "./StateLearn";
import User from "./User";

function Garage(){

    let brandName;
    brandName = 'Dhoni';
    const stats = {
        'name': 'Dhoni',
        'age': '45',
        'experience': '23',
        'wife': 'sakshi',
        'place': 'Ranchi'
    };
    const users = [
        {id: 1, name:'krishnan', place:'chennai'},
        {id: 2, name:'Sathya', place:'ParamaKudi'},
        {id: 3, name:'Sridhar', place:'Erode'}
    ];
    return <>
        {/* <p>Currently Available vechicles</p> */}
        {/* { brandName !== undefined 
        ? <Car brandName = {brandName} status ={'cricket'} stats = {stats}/>
        : null } */}
        {/* <ClassComponent stats = {stats}/>
        <User users ={users}/>
        <StateLearn/>
        <ClassState name={stats}/>
        <Scooter/>
        <ArrayComponent/> */}
        <MyForm/>
    </>
}
export default Garage