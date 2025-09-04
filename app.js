// Simple client-side rendering for catalog/top10 using _data/products.json
async function loadData(){
  try{
    const r = await fetch('/_data/products.json');
    const products = await r.json();
    if(document.getElementById('catalog')){
      const el = document.getElementById('catalog');
      el.innerHTML = products.map(p => `<article class="card"><img src="${p.image}" alt="${p.title}" style="width:100%"><h3>${p.title}</h3><p class="muted">${p.short}</p><p><a class="btn" href="${p.links.uk}" target="_blank" rel="nofollow sponsored noopener">Check price</a></p></article>`).join('');
    }
    if(document.getElementById('top10')){
      const el = document.getElementById('top10');
      el.innerHTML = '<ol>' + products.slice().sort((a,b)=>b.rating-a.rating).slice(0,10).map(p=>`<li><a href="/products/${p.id}.html">${p.title}</a> — ${p.short}</li>`).join('') + '</ol>';
    }
  }catch(e){console.error(e)}
}
document.addEventListener('DOMContentLoaded', loadData);
