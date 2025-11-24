class array{
    constructor(initialData = []){
        this.data = {};
        this.length = 0;

        for(let i=0 ; i <initialData.length ; i++){
            this.data[i] = initialData[i];
            this.length++

        }
    }

    traverse(){
        let output = "";

        for(let i=0; i<this.length; i++){
            output += this.data[i] + " ";
        }
        console.log(output);
    }

    insert(index,data){
        //correcting statement
        if(index < 0 || index > this.length){
            console.log("Invalid index");
            return;

        }

        //shifting conditon
        for(let i = this.length; i > index; i--){
            this.data[i] = this.data[i-1];

        }
        this.data[index] = data;
        this.length++;
    }

}


arr1 = new array([4,2,3]);

arr1.traverse();
arr1.insert(0,50);
arr1.traverse();
