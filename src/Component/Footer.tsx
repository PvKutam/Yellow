"use client"
export function Footer(){
    const Mail =()=>{
        window.location.href = "mailto:pvk.abbu@gmail.com";
      }
    return(
<div id= 'Footer' className="flex flex-col-reverse border-t-2 border-[#1e1e1e] gap-3 justify-center items-center p-2  md:flex-row md:justify-between scroll-mt-28">
<span className="text-white">© 2022 Kutam</span>
<div className="flex items-center justify-center gap-5 ">

<a href="https://github.com/PvKutam/Portfolio" className="w-[28px] h-[28px]  p-1">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
<path fill="white"  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0
 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 
 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>
</a>


<a  href="https://www.linkedin.com/in/p-venkata-kutam-raju-16b004216/" className="w-[28px] h-[28px]   p-1">
<svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 
0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 
61.9 111.28 142.3V448z"/></svg>
</a>


<a className="w-[28px] h-[28px] p-1" onClick={Mail} >

<svg fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
</a>
</div>
</div>
    )
}