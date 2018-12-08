import React, { Component } from 'react';
import Bosscard from "../components/Bosscard"


class Bossarea extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bosss: [
                {
                name: "Blood Starved Beast",
                image: "https://bloodborne.wiki.fextralife.com/file/Bloodborne/blood-starved_beast_boss.jpg",
                defeated: false
                },
                {
                name: "Cleric Beast",
                image: "https://bloodborne.wiki.fextralife.com/file/Bloodborne/cleric_beast_boss.jpg",
                defeated: false
                },
                {
                name: "Darkbeast Paarl",
                image: "https://bloodborne.wiki.fextralife.com/file/Bloodborne/darkbeast_paarl_boss.jpg",
                defeated: false
                },                
                {
                name: "Father Gascoigne",
                image: "https://bloodborne.wiki.fextralife.com/file/Bloodborne/father_gascoigne_boss.jpg",
                defeated: false
                },          
                {
                name: "Gehrman, The First Hunter",
                image: "https://bloodborne.wiki.fextralife.com/file/Bloodborne/gehrman_boss.jpg",
                defeated: false
                },                      
                {
                name: "Micolash, Host of the Nightmare",
                image: "https://bloodborne.wiki.fextralife.com/file/Bloodborne/micolash_boss.jpg",
                defeated: false
                },
                {
                name: "Martyr Logarius",
                image: "https://bloodborne.wiki.fextralife.com/file/Bloodborne/logarius_boss.jpg",
                defeated: false
                },
                {
                name: "One Reborn",
                image: "https://bloodborne.wiki.fextralife.com/file/Bloodborne/the_one_reborn_boss.jpg",
                defeated: false
                },
                {
                name: "Shadow of Yharnam",
                image: "https://bloodborne.wiki.fextralife.com/file/Bloodborne/Shadow_of_Yharnam.jpg",
                defeated: false
                },
                {
                name: "Vicar Amelia",
                image: "https://bloodborne.wiki.fextralife.com/file/Bloodborne/vicar_amelia.jpg",
                defeated: false
                },
                {
                name: "Witch of Hemwick",
                image: "https://bloodborne.wiki.fextralife.com/file/Bloodborne/witch_of_hemwick_boss.jpg",
                defeated: false
                }
            ]
        }
    }

    renderBosscard = () => {
        return this.state.bosss.map(boss => <Bosscard name={boss.name} image={boss.image} />)
    }

    render() { 
        return ( 

            <div>
                <div class="ui grid">
                    <div class="three column row">
                        {this.renderBosscard()}

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Bossarea;