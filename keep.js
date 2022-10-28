
const addButton = document.getElementById("addNote");
const updateLSData = ()=>{
   const textAreaData = document.querySelectorAll('textarea');
   console.log(textAreaData);
   const not = [];
    
   textAreaData.forEach((i)=>{
      return not.push(i.value);
   });
   localStorage.setItem('not',JSON.stringify(not));
};

   const addNewNote =(text ="") =>
   {
      const i = document.createElement('div');
      i.classList.add("note");
      
      const htmlData=`

      <div>
      <button class="edit"><img src="save.svg" alt=""></button>
      <button class="delete"><img src="delete.svg" alt=""></button>
      </div>
      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea id="textArea" class="${text ? "hidden" : ""}"></textarea> `;
       i.insertAdjacentHTML('afterbegin',htmlData);
      //    console.log(i);


            const editButton = i.querySelector('.edit ');
            const deleteButton = i.querySelector('.delete');
            const mainButton = i.querySelector('.main');
            const textArea = i.querySelector('textarea');

            deleteButton.addEventListener('click',  () =>
               {
                 i.remove();
                });
              
                  // textArea.value = text;
                  // // bigDivText.value = text;
                  // mainButton.innerHTML = text;

                  editButton.addEventListener('click',() =>{ 
                  mainButton.classList.toggle('hidden');
                  textArea.classList.toggle('hidden');
            })
               // textArea.addEventListener('change',(event)=>
               // bigDivText.addEventListener('change',(event)=>
               textArea.addEventListener('change',(event)=>
               {
                  const value = event.target.value;
                  textArea.innerHTML = value;
                  // bigDivText.innerHTML = value;
                  mainButton.innerHTML = value;   
                  updateLSData();    
               });

               // textArea.addEventListener('change',(event)=>
               // {
               //    const value = event.target.value;
               //    textArea.innerHTML = value;
               //    // bigDivText.innerHTML = value;
               //    mainButton.innerHTML = value;   
               //    updateLSData();    
               // });


               document.body.appendChild(i);
               // addButton.addEventListener('click',()=>addNewNote());

   }
               const not = JSON.parse(localStorage.getItem('not'));
               if(not)
               {
                  not.forEach((i)=>addNewNote(i))
               };

   //  addButton.addEventListener('click',()=>addNewNote());
            addButton.addEventListener('click',()=>addNewNote());


               

