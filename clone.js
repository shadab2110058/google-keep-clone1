
const addNote = document.querySelector("#addNote")
//  const mainsection = document.querySelector("#mainsection")

 addNote.addEventListener("click",function() {
        New()
    })



    const New =(text ="") =>
   {
       const keep = document.createElement('div');
       keep.className="note";
       const htmlData=`
       <div>
       <button class="delete"><img src="delete.svg" alt=""></button>
        </div>
        <div class="main"></div>
        <textarea id="textArea">${text}</textarea> `;


     keep.queryselector(".delete").addeventListener("click",function(){
        keep.remove()
        saving()
     })


     keep.queryselector("textarea").addeventListener("focusout",function(){
        saving()
     })
     document.body.appendChild(keep);
    }

       const saving = () =>{
        const notes = document.querySelectorAll(".keep textarea");
        const data = [];
        notes.forEach((keep) =>{
            data.push(keep.value)
        })
        if(DataTransfer.length==0){
            localStorage.removeItem("notes")
        }
        else{
            localStorage.setItem("notes",JSON.stringify(data))
        }
       }
       (
   function (){
    const IsNotes = JSON.parse(localStorage.getItem("Notes"));
    if(IsNotes==null)
    {
        New()
        
    }
    else{
        IsNotes.forEach((IsNote)=>{
            New(IsNote)
        })
    }
   }
       )