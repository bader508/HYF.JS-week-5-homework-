console.log('It\'s loaded successfully');
function button(){
    let button;
    if (button="double click"){
        console.log('youClickedMe');
    }
    else {
         return false;
    }

btn.addEventListener("click", function(){
    function showHYFRepos() {
        fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos', function(repoList) {
            
            for (let i = 0; i < repoList.length; i++) {
                    const repo = repoList[i];
                    const ol = document.querySelector('#repoList');
                    const li = document.createElement('li');
                    li.innerHTML = `<a target="_blank" href="${repo.html_url}">${repo.id}---${repo.name}.........(${repo.git_url})</a>`;
                    
                    ol.appendChild(li);
                    
                }
                
            });
        }
    
   
    showHYFRepos();
        });
    };
    
function fetchJSONData(url, callbackFn) {

        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function() {
        console.log("Loaded data.");
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
            });
        xhr.open('GET',url );
        xhr.send();
        }
        fetchJSONData('https://api.github.com/orgs/HackYourFuture/repos', function(repoList){
        console.log(repoList);
        
        
            });
        