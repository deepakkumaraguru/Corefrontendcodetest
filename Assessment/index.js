    //function to get details of collectionid 
    //todo - add fetch dynamic 
    var data;
    var finalData;
    const primaryUrl = "./primary.json";
    async function getCollectionid(primaryUrl){
        const response = await fetch(primaryUrl);
        data = await response.json();
        var output =  data.filter(finaldata => finaldata.collectiontype == "landing");
    }

    const dataOutput = getCollectionid(primaryUrl);

    //function to get details of news content and set them in html
    //todo - add fetch dynamic 
    const dataUrl = "../localhost/api/collection/data.json";
    async function getContent(dataUrl){
        const response = await fetch(dataUrl);
        finalData = await response.json();

    //function to set the news content in html
        //news item 1
        const title1 = document.getElementById('box-2-title');
        title1.innerHTML = (finalData[0].Title).toUpperCase();
        const intro = document.getElementById('box-3-intro');
        intro.innerHTML = finalData[0].Intro;
        const srcElementBox1 = document.getElementById('box-1-img');
        srcElementBox1.src = finalData[0].Imageurl;
        const publishedTime4 = document.getElementById('box-4-published');
        publishedTime4.innerHTML = finalData[0].Published;

        //news item 2
        const title6 = document.getElementById('box-6-title');
        title6.innerHTML = finalData[1].Title;
        const srcElementBox5 = document.getElementById('box-5-img');
        srcElementBox5.src = finalData[1].Imageurl;
        const intro7 = document.getElementById('box-7-intro');
        intro7.innerHTML = finalData[1].Intro;
        const publishedTime7 = document.getElementById('box-7-published');
        publishedTime7.innerHTML = finalData[1].Published;

        //news item 3
        const title8 = document.getElementById('box-8-title');
        title8.innerHTML = finalData[2].Title;
        const publishedTime8 = document.getElementById('box-8-published');
        publishedTime8.innerHTML = finalData[2].Published;
        const srcElementBox8 = document.getElementById('box-8-img');
        srcElementBox8.src = finalData[2].Imageurl;

        //news item 4
        const title9 = document.getElementById('box-9-title');
        title9.innerHTML = finalData[3].Title;
        const publishedTime9 = document.getElementById('box-9-published');
        publishedTime9.innerHTML = finalData[3].Published;
        const srcElementBox9 = document.getElementById('box-9-img');
        srcElementBox9.src = finalData[3].Imageurl;

    }

    getContent(dataUrl);


    



