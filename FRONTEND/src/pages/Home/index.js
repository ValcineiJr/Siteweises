import React from 'react';

export default function Home() {
  const menuItens = ['inicio', 'sobre', 'projetos', 'contato']
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.menu} >
            <ul style={styles.menuList}>
              {menuItens.map(item =>(
                <a href="#" className='menuLink' style={styles.menuLink}><li>{item}</li></a> 
              ))}
              </ul>
          </div>
            <div style={styles.icons}>
             
          </div>
        </header>
        <main style={styles.mainBackground}  >
          <section style={styles.mainParagrafo} >

          </section>
          <section>

          </section>
        </main>
      </div>
    </div>
    
  );
}

const styles = {
  body:{
    display:'flex',
    background:'#171941',
    position:'absolute',
    top:0,
    left:0,
    zIndex:11,
    width:'100%',
    height:'100%',
  },
  container:{
    width:'100%',
    maxWidth:1000,
    background:'green',
    margin:'0 auto'
  },
  menu:{
  },
  icons:{
    
  },
  header:{
    height:80,
    flex:1,
    background:'red',
  },
  mainBackground:{},
  mainParagrafo:{},
  menuList:{display:'flex', listStyle:'none'},
  menuLink:{padding:10, color:'blue',}
}
