const junkDOm = document.querySelector(".saveJunk")
junkDOm.innerHTML = `


<fieldset>
    <label for="junk__category">Name:</label>
    <input id="saveJunk" class="saveJunk" type="text" autofocus />
    
      
    
    <select class="categoryId"></select>
    
    
    </fieldset>
    


<button id="btn-saveJunk">Save Junk</button>




`


API.saveCategories()

document.querySelector("#btn-saveJunk").addEventListener("click", event => {
    const junks = document.querySelector("#saveJunk").value;
   const selectCAtegoryId = document.querySelector(".categoryId").value
  

        // Once you have collected all the values, build your data structure
        const junkObj = {
            name: junks,
            categoryId: selectCAtegoryId
            

        };

    API.saveJunk(junkObj)
    .then(parsedResult => {
        console.log("what is the result", parsedResult);
    });

});








