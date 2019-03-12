class View {
    constructor(game, $el) {
        this.game = game;
        this.$el = $el;
        this.setupTowers();
        this.render();
        this.clickTower();
        this.clickedTower = undefined;
    }

    clickTower(){
        $('ul').on('click',(e)=>{
            const $e = $(e.currentTarget);
        if(!this.game.won){
            if (this.clickedTower !== undefined) {
                let startTowerIDX = this.clickedTower
                let endTowerIDX = $e[0].id;
                this.game.move(startTowerIDX, endTowerIDX)
                console.log('move made')
                this.clickedTower = undefined
                $("ul").css("border-color", "black");
                if(this.game.isWon()){
                    alert('you win! great job!')
                    $('li').css("background-color","green");
                }
            } else {
                this.clickedTower = $e[0].id;
                console.log(this.clickedTower)
                $e.css("border-color", "red");

                console.log('tower clicked')
            }
            this.render();
        }

            
        })
    }
    setupTowers(){
        for(let i = 0; i < 3; i++){
            this.$el.append(`<ul class="tower-${i+1}" id="${i}">`);        
            $('ul').first().append(`<li id="disc-${i+1}">`);
        }
    }

    render() {
        let towers = this.game.towers
        const $uls = $("ul");
        for (let i = 0; i < towers.length; i++) {
            let tower = towers[i];
            let $ul = $($uls[i])
            for (let j = 0; j < tower.length; j++) {
                let $disc = $(`#disc-${tower[j]}`)
                $disc.remove();
                $ul.prepend($disc);
            }
        }
    }
}
//`disc-${i}`
module.exports = View;