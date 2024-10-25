const fs = require('fs');
const path = require('path');

const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

export class dayDb {

    dataPath : string ;
    stringDataPath : string ;
    completeDatabase;

    private saveDb () {
        fs.writeFile(path.join('src' , this.stringDataPath ) , JSON.stringify(this.completeDatabase) , (e : any) => {
            if (e)  {
                //console.log (e)
                return false;
            } else {    
                console.log('data saved Successfully');
                return true;
            }
        });
    };

    private findElementById(day : number, id: string) {
        for (let i = 0; i < (this.completeDatabase.days[day].todo).length; i++){
            if (this.completeDatabase.days[day].todo[i].id === id){
                return i;
            }   
        }
        console.log(`id not found:${id}`)
        return -1
    }

    constructor(path:string){
        this.stringDataPath = path
        this.completeDatabase = this.dataPath = require(path);
    }

    public getAllDaysTasks(){
        let allTasks : Array<any> = [];

        for (let i = 0; i < this.completeDatabase.days.length; i++){
            allTasks.push( this.completeDatabase.days[i].todo);
        }
        return allTasks
    }

    public getOneDayTask(day : number){
        return this.completeDatabase.days[day]
    }
    

    public addTask(day : number, id : number, hour : string, date : number, content : string){
        this.completeDatabase.days[day].todo.push({
            "id" : id,
            "hour" : hour,
            "date"  : date,
            "content" : content
        });
        this.saveDb();
    }

    public deleteTask(day : number, id : string){
        let item = this.findElementById(day, id);
        if (item >= 0){
            delete(this.completeDatabase.days[day].todo[item]);
            this.saveDb();
        } else {
            console.log('Not found');
        }
    }
}


//console.log(mydb.getOneDayTask(0))