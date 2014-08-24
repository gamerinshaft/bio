// Generated by CoffeeScript 1.7.1
(function() {
  window.SlidePager = (function() {
    function SlidePager(options) {
      this.$body = $("body");
      this.number = 1111;
    }

    SlidePager.prototype.shiftRight = function() {
      return this.selectPanel("right");
    };

    SlidePager.prototype.shiftLeft = function() {
      return this.selectPanel("left");
    };

    SlidePager.prototype.shiftUp = function() {
      return this.selectPanel("up");
    };

    SlidePager.prototype.shiftDown = function() {
      return this.selectPanel("down");
    };

    SlidePager.prototype.$dataname = function(number) {
      return $("[data-js=" + number + "]");
    };

    SlidePager.prototype.isBack = function(latestState) {
      return this.beforeState[this.beforeState.length - 1] === latestState;
    };

    SlidePager.prototype.selectPanel = function(dir) {
      switch (dir) {
        case "left":
          if (parseInt((this.number + "").slice(0, 1)) >= parseInt((this.number + "").slice(2, 3))) {
            return this.movePanel(1000, dir);
          } else {
            return this.movePanel(-10, dir);
          }
          break;
        case "up":
          if (parseInt((this.number + "").slice(1, 2)) >= parseInt((this.number + "").slice(3, 4))) {
            return this.movePanel(100, dir);
          } else {
            return this.movePanel(-1, dir);
          }
          break;
        case "right":
          if (parseInt((this.number + "").slice(2, 3)) >= parseInt((this.number + "").slice(0, 1))) {
            return this.movePanel(10, dir);
          } else {
            return this.movePanel(-1000, dir);
          }
          break;
        case "down":
          if (parseInt((this.number + "").slice(3, 4)) >= parseInt((this.number + "").slice(1, 2))) {
            return this.movePanel(1, dir);
          } else {
            return this.movePanel(-100, dir);
          }
      }
    };

    SlidePager.prototype.movePanel = function(num, dir) {
      var e;
      if (this.$dataname(this.number + num).hasClass("pages")) {
        e = $.Event("transing");
        $(window).trigger(e);
        this.$dataname(this.number).addClass("move" + dir).on("transitionend", (function(_this) {
          return function() {
            _this.$dataname(_this.number - num).removeClass("active");
            _this.$dataname(_this.number - num).removeClass("move" + dir);
            e = $.Event("transfinish");
            return $(window).trigger(e);
          };
        })(this));
        this.number += num;
        return this.$dataname(this.number).addClass("active");
      }
    };

    return SlidePager;

  })();

}).call(this);
