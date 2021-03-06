var GameLayer = cc.Layer.extend({
	_board: null,
	ctor: function()  {
		this._super ();
		this._board = new Board();
		this._board.x = cc.winSize.width/2;
		this._board.y = cc.winSize.height/2;
		this.addChild(this._board);

		var t = new Tile (this._board.randomAvailableCell(),2)
		this._board.insertTile(t);
	},
});
var GameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameLayer();
        this.addChild(layer);
    }
});