// const video = {
//     title : 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag){
//             console.log(this.title, tag);
//         });
//     }
// };

// const video1 = {
//     title : 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach( tag => { 
//             console.log(this.title, tag);
//         });
//     }
// };
// video.showTags();
// video1.showTags();
let myObj = {
    get(cb){
        cb();
    },

    parse(){
        console.log("parse called");
    },

    render() {
        get(function(){
            parse();
        }.bind(this));
    }
}


myObj.render();