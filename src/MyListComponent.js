const MyListComponent = () => {

    const numbers = [1,2,3,4,5,6,7,8];
    let numbersList = [];

    // to render lists you can use for, foreach or map

    // for(let num of numbers){
    //     numbersList.push(<li>{num}</li>)
    // }

    // numbers.forEach(num =>{
    //     numbersList.push(<li>{num}</li>)
    // })

    numbersList = numbers.map((num, index)=> <li key={index}>{num}</li>)


     
    return (
        <div>
            <h1>Rendering Lists</h1>
            <ul>
                {numbersList}
            </ul>
        </div>
    )
};

export default MyListComponent;