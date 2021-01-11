(this["webpackJsonpstacy-react-app"]=this["webpackJsonpstacy-react-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},16:function(e,t,a){},28:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var s=a(0),i=a(1),n=a.n(i),c=a(11),r=a.n(c),o=a(6),l=a.p+"static/media/s-logo-dark.7eafc265.svg",h=a.p+"static/media/s-logo-light.41e8c822.svg",d=a(22),m=n.a.createContext();function p(e){var t=e.children,a=Object(i.useState)("light"),n=Object(d.a)(a,2),c=n[0],r=n[1];return Object(s.jsx)(m.Provider,{value:{theme:c,toggleScheme:function(){r("light"===c?"dark":"light")}},children:t})}a(28);var u=function(){var e=Object(i.useContext)(m),t=e.theme,a=e.toggleScheme;return Object(s.jsxs)("div",{className:"switch",children:[Object(s.jsx)("input",{id:"cmn-toggle",className:"cmn-toggle cmn-toggle-round-flat ".concat(t,"-theme"),type:"checkbox",onChange:a}),Object(s.jsx)("label",{htmlFor:"cmn-toggle"})]})};a(12);var g=function(){var e=Object(i.useContext)(m).theme;return Object(s.jsxs)("nav",{className:"App-navbar ".concat(e,"-theme"),children:[Object(s.jsx)(o.b,{className:"logo-link",to:"/",children:Object(s.jsx)("img",{src:"light"===e?l:h,className:"App-logo",alt:"logo"})}),Object(s.jsxs)("div",{className:"navbar-links ".concat(e,"-theme"),children:[Object(s.jsx)(o.b,{className:"navbar-link",to:"/blog",children:"Blog"}),Object(s.jsx)(o.b,{className:"navbar-link",to:"/recipes",children:"Recipes"}),Object(s.jsx)(o.b,{className:"navbar-link",to:"/travelling",children:"Travelling"}),Object(s.jsx)(o.b,{className:"navbar-link",to:"/projects",children:"Projects"}),Object(s.jsx)(u,{})]})]})},b=a(4),j=a.p+"static/media/IMG_7200-EFFECTS.e7e29993.jpg";a(37);var y=function(){var e=Object(i.useContext)(m).theme;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("section",{className:"intro",children:[Object(s.jsxs)("h1",{className:"section-title",children:["Hi, I am ",Object(s.jsx)("br",{}),Object(s.jsx)("strong",{children:"Stacy Hung"})]}),Object(s.jsx)("h4",{className:"section-subtitle ".concat(e,"-theme"),children:"PhD, Front-end Dev"}),Object(s.jsx)("img",{className:"intro-img",src:j,alt:"me looking out at NZ",id:"profile-pic"})]}),Object(s.jsx)("p",{className:"intro-content",children:"I'm a bioinformatics scientist who recently discovered an untapped passion for web design and development. When I'm not coding, I can be found cycling on the North Shore, sipping on a matcha latte, or coming up with an itinerary for my next big trip. Here's my outlet - enjoy!"})]})},f=[{id:"20201017",title:"Batch correcting for different 10X 3\u2019 assay chemistry versions",date:"October 17, 2020",exerpt:"I\u2019ve recently had the chance to work on some single-cell RNA-seq (scRNAseq) datasets generated with the 10X Genomics 3\u2019 assay.",img_small:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/blog/MNN_correction_mini_v2.jpg",img_large:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/blog/MNN_correction_v3.png",img_alt:"Schematic of MNN batch correction"},{id:"20201217",title:"Decoding the coder: my path to front-end development",date:"December 17, 2020",exerpt:"Earlier this year, I had an epiphany about what I wanted to do with my career.",img_small:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/blog/javascriptmas_mini.png",img_large:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/blog/javascriptmas.jpg",img_alt:"Javascriptmas Advent Calendar"}];a(13);var w=function(e){var t=e.data,a=Object(i.useContext)(m).theme;return Object(s.jsx)(o.b,{className:"blog-card-link",to:"/blog/".concat(t.id),children:Object(s.jsxs)("div",{className:"blog-card ".concat(a,"-theme"),children:[Object(s.jsx)("img",{className:"blog-card-img",src:t.img_small,alt:t.img_alt}),Object(s.jsxs)("div",{className:"blog-card-content",children:[Object(s.jsx)("h3",{className:"blog-card-title",children:t.title}),Object(s.jsx)("p",{className:"blog-card-exerpt",children:t.exerpt}),Object(s.jsx)("p",{className:"blog-card-date",children:t.date})]})]})})};var x=function(){var e=f.map((function(e){return Object(s.jsx)(w,{className:"blog-card",data:e},e.id)}));return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"blog-cards-container",children:e})})};function O(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("p",{children:["I\u2019ve recently had the chance to work on some single-cell RNA-seq (scRNAseq) datasets generated with the ",Object(s.jsx)("a",{href:"https://www.10xgenomics.com/products/single-cell-gene-expression",class:"within-article-link",children:"10X Genomics 3\u2019 assay"}),". The way I\u2019ve been analyzing this data is by running the UMI counts through the `cellranger count` pipeline and loading the resulting filtered feature-barcode matrices as input for a Seurat object in R."]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("a",{href:"https://satijalab.org/seurat/",className:"within-article-link",children:"Seurat"}),", by the way, is an incredibly well-documented and easy-to-use R package designed specifically for scRNAseq analysis. I was intimidated by the idea of analyzing single-cell data, but Seurat got me started in no time and before I knew it, I was identifying cluster markers and looking at how differentially expressed genes could help explain changes seen from diagnosis to relapse in Hodgkin\u2019s Lymphoma cases. So cool!"]}),Object(s.jsx)("p",{children:"One of the unique aspects of Seurat is its approach to batch-correction (or \u201cintegration\u201d in Seurat\u2019s terms) which uses a combination of Canonical Correlation Analysis (conceptually similar to the Needleman-Wunsch algorithm) and mutual nearest neighhours (MNN). The gist of their approach aims to identify shared cell states that are present across different datasets -- these \u201canchors\u201d allow for the transfer information from one dataset to another, resulting in a single harmonized reference."}),Object(s.jsxs)("p",{children:["Before using Seurat, I wasn\u2019t familiar with any other batch-correction methods for scRNAseq, but a colleague pointed out that a ",Object(s.jsxs)("a",{href:"https://www.nature.com/articles/nbt.4091?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+nbt%2Frss%2Fcurrent+%28Nature+Biotechnology+-+Issue%29",className:"within-article-link",children:["MNN-based approach by Haghverdi ",Object(s.jsx)("em",{children:"et al."})]})," is fairly commonly used in the field. Since I was still new to the topic and wanted to make sure I was using the best method for my analysis, I did some research to see if there were any studies comparing the two methods, and to see perhaps if even other methods might be more suitable."]}),Object(s.jsxs)("p",{children:["A very comprehensive study by ",Object(s.jsxs)("a",{href:"https://genomebiology.biomedcentral.com/articles/10.1186/s13059-019-1850-9",className:"within-article-link",children:["Tran ",Object(s.jsx)("em",{children:"et al."})]}),"was published in Genome Biology earlier this year, and examines the performance of 14 scRNAseq batch-correction methods applied to 10 datasets. The study looks at diverse scenarios, including combining batches with: identical cell types but different technologies, non-identical cell types, more than two batches, \u201cbig data\u201d and simulated data. No one tool was the winner, but Seurat3, Harmony and LIGER performed consistently well across the majority of datasets."]}),Object(s.jsxs)("p",{children:["So I continued using Seurat for all my analyses and felt good about it. Eventually, I started to examine individual genes exhibiting significant changes in expression between groups of interest (i.e. diagnosis vs. relapse cases), when I came across ",Object(s.jsx)("i",{children:"JUND"}),", a proto-oncogene that appeared to be highly expressed at relapse but very lowly expressed at diagnosis. Surprisingly, the expression pattern was similar across all clusters and thus could not be linked to a given cell type. This didn\u2019t make sense biologically since such extreme changes in gene expression would need to come from a specific immunophenotype and not all the cells."]}),Object(s.jsxs)("p",{children:["I then looked at expression of ",Object(s.jsx)("i",{children:"JUND"})," at the sample level, and noticed that in addition to all of the diagnostic samples, a handful of the relapse samples were not expressing ",Object(s.jsx)("i",{children:"JUND"}),". When I presented these results to my lab, the technician who runs the sequencing experiments, recalled these samples were prepared using an older version of the 3\u2019 assay (V2). Indeed, the 10X website shows data indicating that their 3\u2019 V3 assay results in increased UMI counts and numbers of genes per cell compared to their 3\u2019 V2 assay, which I confirmed with my own data."]}),Object(s.jsx)("h3",{children:Object(s.jsx)("em",{children:"So what\u2019s the best way to correct for differences in chemistry, and how can one account for gene dropouts?"})}),Object(s.jsxs)("p",{children:["Well, I already knew the first part of the answer (batch-correction), but I wasn\u2019t sure how to address the gene drop out problem, which unaccounted for, would inevitably skew my differential expression analyses. I went on a call with my team to discuss this issue with 10X, and discovered they have exactly a solution for us: ",Object(s.jsx)("a",{href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/using/aggregate",className:"within-article-link",children:"Aggregating Libraries With Different Chemistry Versions"}),"... Or did they?"]}),Object(s.jsx)("p",{children:"The `cellranger aggr` pipeline, by default, aggregates outputs from multiple runs of the cellranger count pipeline by sub-sampling reads from higher-depth cells until all cells on average have an equal numbers of cells. This is essentially 10X\u2019s way of normalizing the data for sequencing depth, but is not ideal since a potentially large amount of data is discarded right off the bat. The alternative normalization approach (e.g. in Seurat) fits a model (e.g. regularized negative binomial regression) to the UMI counts. Thus, a transformation is applied to the data instead of physically removing the reads."}),Object(s.jsx)("p",{children:"In addition to normalization, the `aggr` pipeline can carry out an additional but optional step that corrects for different chemistry versions given batch information. Here, batches are referring to the libraries sequenced with the same assay version. While I was already a little skeptical of using this approach since the normalization step throws away potentially valuable data, the 10X representative made me even more doubtful by showing me \u201cbefore\u201d and \u201cafter\u201d UMAP visualizations that were less-than-convincing. She also noted that the batch-correction step is only designed for combining V2 and V3 chemistries, and not intended to discern batch effects between different runs. Noneless, I kept an open mind."}),Object(s.jsx)("p",{children:"After our call, I read through all the documentation on this topic, and was surprised to learn that the batch-correction method specifically designed for combining V2 and V3 chemistries was the MNN approach. As you may recall, this was the same method I mentioned earlier that is commonly used for batch-correction in scRNAseq analysis. Wait a second\u2026 so correcting for different chemistries just means I can correct for different batches? This actually makes a lot of sense, since a batch needs to be prepared with the same chemistry, so in reality I was already indirectly correcting for the chemistries by correcting for technical batches."}),Object(s.jsx)("h3",{children:"There are a few takeaway messages here:"}),Object(s.jsxs)("ol",{children:[Object(s.jsx)("li",{children:"To correct for differences in chemistry between batches, you can use your favourite batch-correction method. You don\u2019t and probably shouldn\u2019t have to use 10X\u2019s aggr pipeline since you\u2019ll lose lots of reads, and the correction step won\u2019t be that good (MNN doesn\u2019t perform that well compared to a number of other scRNAseq batch correction methods)."}),Object(s.jsxs)("li",{children:["Once you\u2019ve corrected for different chemistry versions (and batches), you\u2019re still going to see gene dropouts. This is actually a major unsolved problem in scRNAseq analyses, but there are a few approaches that might help:",Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.nature.com/articles/s41467-018-03405-7",className:"within-article-link",children:"An accurate and robust imputation method scImpute for single-cell RNA-seq data"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.biorxiv.org/content/10.1101/731638v1.full",className:"within-article-link",children:"scDoc: Correcting Drop-out Events in Single-cell RNA-seq Data"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.nature.com/articles/s41467-020-14976-9",className:"within-article-link",children:"Embracing the dropouts in single-cell RNA-seq analysis"})})]})]}),Object(s.jsx)("li",{children:"Do your homework! Companies love promoting their products, even if it may not be the right solution for (but they will make it sound like it is). By doing my research, I saved myself from re-doing all my analyses with a worse pipeline and would probably end up being even more confused than when I started."})]})]})}function v(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("p",{children:"Earlier this year, I had an epiphany about what I wanted to do with my career."}),Object(s.jsxs)("p",{children:["For half my life, I had believed ",Object(s.jsx)("a",{className:"within-article-link",href:"https://en.wikipedia.org/wiki/Bioinformatics",children:"bioinformatics"})," was my calling. I had enrolled in one of only two bioinformatics undergraduate programs in the country, then pursued a PhD in bioinformatics and finally I\u2019m a bioinformatician at a renowned cancer research center. Sounds pretty good, right?"]}),Object(s.jsx)("p",{children:"Not exactly. What I was doing on day one of my job, I\u2019m still doing seven years later (with a few small deviations, but generally a flat path). With my niche responsibilities and lack of growth opportunities, I had hit a standstill and didn\u2019t know how to move forwards. I took on whatever new and exciting projects were available, and mentored numerous co-op students, but still I was feeling unsatisfied. The problem was, I wasn\u2019t developing my skills as a programmer and programming was the part that I enjoyed the most."}),Object(s.jsx)("p",{children:"One day, I was talking to a network contact about my situation. I asked her what she did exactly, and as she described the work, my eyes widened and my smile turned into a huge grin. Wait, I thought. I was having a lightbulb moment. From that moment on, I knew what I wanted to do with my career. Fast-forward ten months later, and I\u2019ve learned all the basics of front-end development (HTML, CSS, Javascript, and React) and even launched a project / blog site on a domain that I am proud to call my own (you're looking at it)!"}),Object(s.jsxs)("p",{children:["2020 has brought nothing but surprises - the best surprise for me was realizing that I had control over my future and that learning can be fun!! The ",Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/",children:"Scrimba"})," platform has been a game-changer for me, and I\u2019m excited to share my solutions for the ",Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/learn/adventcalendar?utm_source=newsletter&utm_medium=email&utm_campaign=javascriptmas_welcome_email",children:"24 days of #Javascriptmas"}),". For each day of December until Christmas, I get to practice my Javascript skills with a unique challenge, and I also get to discover different ways of solving the same problem."]}),Object(s.jsx)("p",{children:"Merry Javascriptmas!"}),Object(s.jsxs)("ul",{className:"bulletless-list",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/coa5f4659b187709b1097781f",children:"Day 1: Candies"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/learn/adventcalendar/note-at-1-20-co0ce40aab40a9f04319098a1",children:"Day 2: Deposit Profit"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/learn/adventcalendar/note-at-0-50-cobcd431c99bbb464cd452845",children:"Day 3: Chunky Monkey"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/co9aa4d0b97c5562e54bcb1ff",children:"Day 4: Century From Year"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/learn/adventcalendar/note-at-0-57-co8c94d99a3a668bcd0faa12b",children:"Day 5: Reverse A String"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/learn/adventcalendar/note-at-0-52-co76641a28b55846b60b77bff",children:"Day 6: Sort By Length"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/learn/adventcalendar/note-at-1-07-co9594bd18ebce647b6e83b35",children:"Day 7: Count Vowel Consonant"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/coaa245c2a3db9f0a5fdf0ba9",children:"Day 8: Rolling Dice"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/cod4848b89e7f95bd4472b337",children:"Day 9: Sum Odd Fibonacci Numbers"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/cod7f4a148d1ca4bb9d89eba8",children:"Day 10: Adjacent Elements Product"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/co58c47019e859f969000ee99",children:"Day 11: Avoid Obstacles"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/co0f14efd89f75c1a26b3d83a",children:"Day 12: Valid Time"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/cof6d4b209560b5e898637aed",children:"Day 13: Extract Each Kth"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/co2cc49e79091124c22c91137",children:"Day 14: Maximal Adjacent Difference"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/co5074c249bc04076bbb6dd66",children:"Day 15: Javascript Carousel"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/coc6441a18efb25ce23b02b32",children:"Day 16: Insert Dashes"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/co12841bbbd614e61a70f271f",children:"Day 17: Different Symbols Naive"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/coc514efe973f728ff83f89c1",children:"Day 18: Array Previous Less"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/coca640f9a4bd2489b4161e3a",children:"Day 19: Alphabet Subsequence"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/coc8946668542dcfc8b31aecf",children:"Day 20: Domain Type"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/co3fd4cd7a63bdc591f00c3cc",children:"Day 21: Sum of Two"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/co90646438ddd8fba9ae1df69",children:"Day 22: Extract Matrix Column"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/co5e14a81a0b58f97a7cdf266",children:"Day 23: Tweet Input Component"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"within-article-link",href:"https://scrimba.com/scrim/co5f54f46acd73f34bd332310",children:"Day 24: Test Your Agility!"})})]})]})}var k=function(){var e=Object(i.useContext)(m).theme,t=Object(b.f)().blogId,a=f.find((function(e){return e.id===t})),n=null;switch(a.id){case"20201017":n=Object(s.jsx)(O,{});break;case"20201217":n=Object(s.jsx)(v,{})}return Object(s.jsxs)("div",{className:"blog-container ".concat(e,"-theme"),children:[Object(s.jsx)("img",{className:"blog-img",src:a.img_large,alt:a.img_alt}),Object(s.jsx)("h1",{children:a.title}),Object(s.jsx)("p",{className:"blog-date",children:a.date}),Object(s.jsx)("div",{className:"blog-content ".concat(e,"-theme"),children:n})]})},N=[{id:"jeopardy",title:"Jeopardy",desc:"Test your knowledge and play previously aired Jeopardy boards!",img_src:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/projects/jeopardy.jpg",img_alt:"jeopardy cover"},{id:"pacman",title:"Pacman",desc:"Eat as many pac-dots as you can and stay away from the ghosts!",img_src:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/projects/pacman.jpg",img_alt:"pacman cover"},{id:"snakegame",title:"Snakegame",desc:"Watch your snake grow and speed up as you consume the apples!",img_src:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/projects/snake-game.png_423682103.webp",img_alt:"snakegame cover"},{id:"to-do-list",title:"To-do Lists",desc:"Create to-do lists and cross out tasks as you complete them",img_src:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/projects/6-things-to-do-list.webp",img_alt:"to-do list"}];a(16);var _=function(){var e=N.map((function(e){return Object(s.jsx)(o.b,{to:"/projects/".concat(e.id),className:"hover-link",children:Object(s.jsxs)("figure",{className:"effect-goliath",children:[Object(s.jsx)("img",{src:e.img_src,alt:e.img_alt}),Object(s.jsxs)("figcaption",{children:[Object(s.jsx)("h2",{children:e.title}),Object(s.jsx)("p",{children:e.desc})]})]},e.id)},e.id)}));return Object(s.jsx)("div",{className:"grid wide",children:e})},I=[{id:"dairy-free-pancakes",name:"Extra-fluffy Dairy-free Blueberry Pancakes",short_name:"Pancakes",yield:"8 pancakes",time:"20 min",description:"This is an incredibly quick and easy pancake recipe that never fails to make extra-fluffy pancakes filled with the juiciness and slight sweetness of antioxidant-rich blueberries. The best part is that I can use almond milk, which I always have handy because I'm lactose intolerant! Also, if you somehow end up not finishing these delicious cakes, you can even freeze the leftovers.",ingredients:["1\xbd cups all-purpose flour","1 tbsp sugar","1 tbsp baking powder","\xbd tsp salt","1\xbc cup almond milk","3 tbsp oil","1 egg","1 tsp vanilla extract","\xbd cup frozen blueberries"],preparation:["Whisk together dry ingredients.","Add remaining ingredients and whisk until smooth. Mix in blueberries.","In preheated skillet, coated with oil or butter, pour in ~\u2153 cup batter, and allow to cook until bubbles are visible throughout before flipping.","Repeat until all batter has been used up. Keep pancakes warm in oven (~200\u2109) while you make the rest. Enjoy!"],img_url:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/recipes/blueberry_panckes.jpg",img_alt:"blueberry pancakes",key_words:"Extra-fluffy, dairy-free, blueberries"},{id:"blueberry-rosemary-scones",name:"Blueberry Rosemary Scones",short_name:"Scones",yield:"8 wedges",time:"30 min",description:"These nearly-vegan scones are the perfect gourmet biscuit for a weekend morning. You can substitute frozen blueberries with fresh (I love the fact that you can use frozen bluerries though, since I always have them around!). Also, fresh rosemary is a must and the real star of this recipe. These also freeze well, so you can make a few batches and save them for later! You can make this recipe completely vegan by creating a 'flax egg' (1 tablespoon of ground flaxseed and 3 tablespoons of water to replace 1 egg).",ingredients:["1 egg","\xbe cup almond milk","2 cups all-purpose flour (plus extra)","1 tbsp baking powder","\xbc cup cane sugar (plus extra)","\xbd tsp sea salt","1 tbsp fresh rosemary","6 tbsp coconut oil","\u2153 cup frozen blueberries"],preparation:["Whisk together egg and almond milk.","Whisk together dry ingredients (flour, baking powder, sugar, salt, rosemary). Cut in the coconut.","Mix wet and dry ingredients slowly with wooden spoon. Add blueberries.","Transfer to floured surface. Form a disc about 1-inch high, and cut into eight wedges.","Transfer to pan and sprinkle with sugar. Bake at 400\u2109 for 22-27 minutes. Cool before serving. Enjoy!"],img_url:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/recipes/scone-rosemary-blueberry.jpg",img_alt:"freshly baked blueberry rosemary scones",key_words:"Fresh rosemary, blueberries, coconut oil"},{id:"beef-and-barley-soup",name:"Cathy's Beef & Barley Soup",short_name:"Beef & Barley",yield:"6 servings",time:"",description:"My husband made this for dinner one night and I was so impressed! It's now a seasonal favourite. This soup has a flavourful broth that soaks right into the veggies and barley. The beef is deliciously tender and makes this an extra hearty meal. So comforting on a winter's day! Thank you Cathy!",ingredients:["4 lbs of stewing beef or a boneless beef pot roast","2 cloves of garlic","1 tsp dried thyme","\xbc cup vegetable oil","small can (156 ml) tomato paste","2 bay leaves","1 cup dry red wine","1 envelopeton's onion soup","3 cups water","\xbd cup pot barley","\xbd cup mustard (optional)","Loosely chopped vegetables"],preparation:["Dry meat with paper towel. Heat oil over high heat. Add meat to oil and brown all sides. Remove to platter and set aside.","Reduce heat to medium and add tomato paste and bay leaves. Cook, stirring for 2 minutes. Add wine, onion soup mix, water, and mustard and scrape up any browned bits from the bottom of the pan. Mix.","Add meat back to pan and add pot barley. Cover and simmer for 3-4 hours on the stove or 8 hrs in a slow cooker.","During the last half hour add whatever vegetables you want (broccoli potatoes, carrots, corn, etc.)"],img_url:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/recipes/Beef-Barley-Soup.jpg",img_alt:"bowl of beef and barley soup",key_words:"Satisfying, red wine, thyme"},{id:"instant-pot-chicken-and-rice",name:"Instant Pot Chicken and Rice",short_name:"Chicken bowl",yield:"6 servings",time:"",description:"This recipe is overflowing with nutrient-rich and healing ingredients, like bell peppers (very high in vitamin C), carrots (beta-carotene for the eyes), garlic (immune boosting properties), ginger and tumeric (anti-inflammatory) and coconut oil (heart-healthy fats). The best part is that this recipe is so easy to pull together, and all the hard work is done by the Instant Pot. A great weeknight recipe that you'll want to have again and again!",ingredients:["2 tsp coconut oil","1 small onion, diced","1\xbd cups brown rice, rinsed","3 large carrots, peeled, cut into \xbe-inch slices","2 large bell peppers, cut into slices","3 cloves garlic, minced","1 tbsp ginger, minced","1 tsp ground cumin","1 tsp kosher salt","\xbd tsp ground tumeric","\xbc tsp ground coriander","1 cup unsweetened almond milk","1\xbd pounds boneless skinless chicken breasts","1 cup frozen peas","cilantro, chopped (for garnish, optional)"],preparation:["Set 6-quart (or larger) Instant Pot to saute mode. Add the coconut oil. Once hot, add onion and cook, stirring occassionally until softened, about 4 minutes.","Add the brown rice, carrots, red peppers, garlic, ginger, cumin, salt, tumeric and coriander. Stir to coat the rice in oil and spices and cook until fragrant, about 1 minute. Stir in a splash of almond milk and scrape bottom of pot for stuck bits. Stir in remaining almond milk. Arrange chicken breasts in a single layer on top.","Cover and seal the Instant Pot. Cook on high pressure for 20 minutes. Allow pressure to release naturally for 15 minutes.","Uncover and remove chicken breasts. Dice or shred with two forks and return to pot. Add the peas and stir to combine. Adjust seasoning to taste. Serve topped with cilantro."],img_url:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/recipes/Instant-Pot-Chicken-and-Rice-3.jpg",img_alt:"bowl of chicken and rice",key_words:"Antioxidant-rich, tumeric, coriander"}];var S=function(){var e=I.map((function(e){return Object(s.jsx)(o.b,{to:"/recipes/".concat(e.id),className:"hover-link",children:Object(s.jsxs)("figure",{className:"effect-sadie",children:[Object(s.jsx)("img",{src:e.img_url,alt:e.img_alt}),Object(s.jsxs)("figcaption",{children:[Object(s.jsx)("h2",{children:e.short_name}),Object(s.jsx)("p",{children:e.key_words})]})]})},e.id)}));return Object(s.jsx)("div",{className:"grid",children:e})};a(38);var C=function(){var e=Object(b.f)().recipeId,t=I.find((function(t){return t.id===e})),a=t.ingredients.map((function(e){return Object(s.jsx)("li",{children:e})})),i=t.preparation.map((function(e){return Object(s.jsx)("li",{children:e})}));return Object(s.jsxs)("div",{className:"main-container",children:[Object(s.jsx)("h1",{children:t.name}),Object(s.jsxs)("div",{className:"recipe recipe-content-container",children:[Object(s.jsxs)("div",{className:"recipe-quick-summary",children:[Object(s.jsxs)("div",{className:"recipe-metric",children:[Object(s.jsx)("p",{className:"recipe-measure",children:"Yield"}),Object(s.jsx)("p",{className:"recipe-value",children:t.yield})]}),Object(s.jsxs)("div",{className:"recipe-metric",children:[Object(s.jsx)("p",{className:"recipe-measure",children:"Time"}),Object(s.jsx)("p",{className:"recipe-value",children:t.time})]})]}),Object(s.jsxs)("div",{className:"recipe-container recipe-intro",children:[Object(s.jsx)("img",{src:t.img_url,className:"recipe-img",alt:t.img_alt}),Object(s.jsx)("p",{className:"recipe-desc",children:t.description})]}),Object(s.jsxs)("div",{className:"recipe-container recipe-main",children:[Object(s.jsxs)("div",{className:"ingredients-container",children:[Object(s.jsx)("h3",{className:"recipe-subtitle",children:"Ingredients"}),Object(s.jsx)("ul",{children:a})]}),Object(s.jsxs)("div",{className:"instructions-container",children:[Object(s.jsx)("h3",{className:"recipe-subtitle",children:"Preparation"}),Object(s.jsx)("ol",{children:i})]})]})]})]})},D=[{id:"new-zealand",name:"New Zealand",desc:"Three weeks driving from Auckland to Queenstown",img_cover:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/new_zealand/IMG_3864.JPG",img_alt:"Pancake rocks in New Zealand",img_src:["https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/new_zealand/1-IMG_3537.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/new_zealand/2-CSC_4415.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/new_zealand/3-CSC_4438.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/new_zealand/4-CSC_4465.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/new_zealand/5-DSC_4205.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/new_zealand/6-DSC_4270.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/new_zealand/7-DSC_4526.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/new_zealand/8-DSC_4573.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/new_zealand/9-DSC_4608.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/new_zealand/10-IMG_3985.jpg"]},{id:"japan",name:"Japan",desc:"Two weeks by Shinkansen from Tokyo to Hiroshima and back",img_cover:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/japan/IMG_1391.jpg",img_alt:"Temple garden in Kyoto, Japan",img_src:["https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/japan/IMG_0978.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/japan/IMG_1015.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/japan/IMG_1391.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/japan/IMG_1569.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/japan/IMG_4961.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/japan/IMG_4975.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/japan/IMG_5032.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/japan/IMG_5072.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/japan/IMG_5102-COLLAGE.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/japan/IMG_5145.jpg"]},{id:"iceland",name:"Iceland",desc:"Two weeks driving the Golden Circle and Ring Road",img_cover:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/iceland/2-6-Vestmannaeyjar-puffins.small.jpg",img_alt:"puffins in Iceland",img_src:["https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/iceland/1-Pingvellir-male_and_female_goats.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/iceland/2-1-Geysir-geyser_exploding.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/iceland/2-11-Vestmannaeyjar-puffin_closeup.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/iceland/2-19-Vestmannaeyjar-Dennis_on_Elfjell.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/iceland/2-3IMG_3115.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/iceland/3-11-Jorlokson_glaciers.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/iceland/3-6-Skaftafell-waterfall.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/iceland/4-5-dettifoss.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/iceland/4-8-driving_Mvytan.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/iceland/6-2-horsebackriding.jpg"]},{id:"yukon",name:"The Yukon",desc:"Three days snow-biking, dog-sledding and watching the Northen Lights",img_cover:"https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/yukon/4-IMG_0209.jpg",img_alt:"dog-sledding in the Yukon",img_src:["https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/yukon/1-IMG_0168.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/yukon/2-IMG_4121.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/yukon/3-IMG_4205.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/yukon/4-IMG_0209.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/yukon/5-IMG_4145.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/yukon/6-IMG_4170.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/yukon/7-IMG_4201.jpg","https://raw.githubusercontent.com/stacyhung/stacy-react-app/master/images/trips/yukon/8-IMG_4091.jpg"]}];var A=function(){var e=D.map((function(e){return Object(s.jsx)(o.b,{to:"/travelling/".concat(e.id),className:"hover-link",children:Object(s.jsxs)("figure",{className:"effect-jazz",children:[Object(s.jsx)("img",{src:e.img_cover,alt:e.img_alt}),Object(s.jsxs)("figcaption",{children:[Object(s.jsx)("h2",{children:e.name}),Object(s.jsx)("p",{children:e.desc})]})]})},e.id)}));return Object(s.jsx)("div",{className:"grid",children:e})},M=a(20);a(39);var T=function(){var e=Object(b.f)().tripId,t=D.find((function(t){return t.id===e}));return Object(s.jsx)(M.a,{children:t.img_src.map((function(e,t){return Object(s.jsx)(M.a.Item,{interval:1500,children:Object(s.jsx)("img",{className:"carousel-img d-block w-100",src:e,alt:"NZ-".concat(t)})})}))})};var G=function(){return Object(s.jsx)("h1",{className:"page-title",children:"Hi, I'm Stacy!"})};var z=function(){var e=Object(i.useContext)(m).theme;return Object(s.jsx)("div",{className:"main-content-container ".concat(e,"-theme"),children:Object(s.jsxs)(b.c,{children:[Object(s.jsx)(b.a,{exact:!0,path:"/",children:Object(s.jsx)(y,{})}),Object(s.jsx)(b.a,{exact:!0,path:"/blog",children:Object(s.jsx)(x,{})}),Object(s.jsx)(b.a,{path:"/blog/:blogId",children:Object(s.jsx)(k,{})}),Object(s.jsx)(b.a,{exact:!0,path:"/recipes",children:Object(s.jsx)(S,{})}),Object(s.jsx)(b.a,{path:"/recipes/:recipeId",children:Object(s.jsx)(C,{})}),Object(s.jsx)(b.a,{exact:!0,path:"/travelling",children:Object(s.jsx)(A,{})}),Object(s.jsx)(b.a,{path:"/travelling/:tripId",children:Object(s.jsx)(T,{})}),Object(s.jsx)(b.a,{exact:!0,path:"/projects",children:Object(s.jsx)(_,{})}),Object(s.jsx)(b.a,{path:"/about-me",children:Object(s.jsx)(G,{})})]})})};var R=function(e){return Object(s.jsx)("li",{className:"social-list-item",children:Object(s.jsx)("a",{className:"social-list-link",href:e.url,target:"_blank",rel:"noreferrer",children:Object(s.jsx)("i",{className:"fab ".concat(e.icon)})})})};var q=function(){var e=Object(i.useContext)(m).theme;return Object(s.jsxs)("footer",{className:"".concat(e,"-theme"),children:[Object(s.jsxs)("ul",{className:"social-list",children:[Object(s.jsx)(R,{url:"https://github.com/stacyhung",icon:"fa-github"}),Object(s.jsx)(R,{url:"https://www.linkedin.com/in/stacyshung",icon:"fa-linkedin"}),Object(s.jsx)(R,{url:"https://twitter.com/Stacy_S_Hung",icon:"fa-twitter-square"}),Object(s.jsx)(R,{url:"https://www.facebook.com/stacysusanhung",icon:"fa-facebook-square"})]}),Object(s.jsx)("p",{className:"copyright",children:"Stacy Hung 2020"})]})};var F=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(g,{}),Object(s.jsx)(z,{}),Object(s.jsx)(q,{})]})},P=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),i(e),n(e),c(e)}))};a(40);r.a.render(Object(s.jsx)(o.a,{children:Object(s.jsx)(p,{children:Object(s.jsx)(F,{})})}),document.getElementById("root")),P()}},[[41,1,2]]]);
//# sourceMappingURL=main.5065b5b5.chunk.js.map