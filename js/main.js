const search = document.querySelector('#search');
const matchList = document.querySelector('#match-list');

//search state.json and filter it
const searchStates = async searchText => {
    const res = await fetch('data/states.json');
    const states = await res.json();

    const regex = new RegExp(`^${searchText}`, 'gi');

    let matches = states.filter(state => {
        return state.name.match(regex) || state.abbr.match(regex);
    });

    if(!searchText || searchText.length === 0){
        matches = [];
        matchList.innerHTML = '';
    }
    
    render(matches);

}

const render = matches => {
    if(matches.length > 0){
        const html = matches.map(match => 
            `<div class="card card-body mb-1">
                <h4>${match.name} (${match.abbr}) <span class="text-primary">${match.capital}</span></h4>
                <small> Lat: ${match.lat} / Long: ${match.long} </small>
            </div>
            `
        ).join('');
        matchList.innerHTML = html;
    }
}

//use debounce

const debounce = function(fn, delay){
    let timer;
    // this is closure
    return (args) => {
        let context = this;
        // let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(context, args);
            // fn();
        }, delay);
    }
}
const searchFunc = debounce(searchStates, 200);

search.addEventListener('input', () => searchFunc(search.value));


// search.addEventListener('input', () => searchStates(search.value));

