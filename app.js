// console.log("Let's get this party started!");
const $searchResultsContainer   = $( "#searchResultsContainer" );
const $formInput                = $( "#formInput" );

// Adding a gif function
function addGif( res ) {
    let results = res.data.length;

    if ( results ) {
        let id = Math.floor( Math.random() * results );
        
        let $addCol = $( "<div>", { class: "col-md-4 col-12 mb-4" } );
        let $newImg = $( "<img>", { src: res.data[ id ].images.original.url, 
                                    class: "w-100" });
        
        $addCol.append( $newImg );
        $searchResultsContainer.append( $addCol );
    }
}

// Form submission function
$( "form" ).on( "submit", async ( event ) => {
    event.preventDefault();

    let input = $formInput.val();
    $formInput.val( "" );

    const res = await axios.get( "http://api.giphy.com/v1/gifs/search",
                        { params: {
                            q: input,
                            api_key: "OVUHQqaRnavRMekxJxw0TAPjlCDAdFNa"} 
                        });
    addGif( res.data );
});

// Remove gif function
$( "#remove" ).on( "click", () => {
    $searchResultsContainer.empty();
});