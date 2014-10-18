/*
	extend
	
	create : 2014-10-17	
*/


(function(){
       
        var obj_1 = {
		name : 'flora'
	};
	var obj_2 = {
		age : '21',
		sex : 'female',
		name : 'jinxin'
	};
        function extend(destination, source) {
            for (var property in source){//for each property of source
                destination[property] = source[property];//the same property will be rewrite
            }
            return destination;
        }
        extend(obj_1,obj_2);
        console.log(obj_1);//print obj_1
    })();


/*
	however operator "in" performs different in different browers
	we can use "hasOwnProperty" to fitter the same property,so that the property in obj_1 won't be rewrote by the same property in obj_2 
*/


(function(){
       
        var obj_1 = {
		name : 'flora'
	};
	var obj_2 = {
		age : '21',
		sex : 'female',
		name : 'jinxin'
	};
        function extend(destination, source) {
             for (var property in source){
                if(!destination.hasOwnProperty[property]){
                    destination[property] = source[property];
                }
            }
            return destination;
        }
        extend(obj_1,obj_2);
        console.log(obj_1);//print obj_1
    })();


/*
	"bind" and "wrap" are copied from website 
*/
/*Function.prototype.bind = function(context) {
        var _method = this;
	var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = args.concat(Array.prototype.slice.call(arguments, 0));
            return _method.apply(context, b);
        }
}

Function.prototype.wrap =function(wrapper){
        var _this = this;
        return function(){
            var params = [_this.bind(this)].concat(Array.prototype.slice.call(arguments, 0));
            wrapper.apply(this, params);
        }
}*/


/*-------------------------------------------*/

(function(){
       
        var obj_1 = {
            name : 'xesam'
        };
        var obj_2 = {
            age : '24',
            toString:function(){return ('my toString');}
        };
        function extend(destination, source) {
            for (var property in source){
                destination[property] = source[property];
            }
            return destination;
        }
        extend(obj_1,obj_2);
        console.info(obj_1.toString());
    })();