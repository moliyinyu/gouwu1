onload = function(){
			    	var mian = document.querySelector(".mian");
			    	var xiang = document.querySelector(".xiang");
			    	var zhuce = document.querySelector(".zhuce");
			    	var tian = document.querySelector(".tian");
			    	var fan = document.querySelector(".fan");
			    	var inp1 = document.querySelector(".inp1");
			    	var inp2 = document.querySelector(".inp2");
			    	var inp4 = document.querySelector(".inp4");
			    	var deng = document.querySelector(".deng");
			    	var duan = document.querySelector(".duan");
			    	var shouji = document.querySelector(".shouji");
			    	var s_fan = document.querySelector(".s-fan");
			    	var xia = document.querySelector(".xia");
			    	var he1 = document.querySelector(".he1");
			    	var shou = document.querySelector(".shou");
			    	var shousuo = document.querySelector(".shousuo");
			    	var shoufang = document.querySelector(".shoufang");
			    	var qu = document.querySelector(".qu");
			    	var fenlei = document.querySelector(".fenlei");
			    	var yemian = document.querySelector(".yemian");
			    	var denglu = document.querySelector(".denglu")
			    	var zui = document.querySelector(".zuii");
			    	var lingjuan =document.querySelector(".lingjuan");
				    var shezhi = document.querySelector(".shezhi");
				    var xiangfan = document.querySelector("#xiangfan");
				    
				    
			    	var list5 = document.querySelector(".list5");
				    var oli = list5.getElementsByTagName("li");
				var i = 0;
					function sp(){
					for(var j=0;j<oli.length;j++){
						if(j==i){
							oli[j].style.background = "#F33B43";
							oli[j].style.color = "white";
						}else{
							oli[j].style.background = "white";
							oli[j].style.color = "black";
						}
					}
					if(i==oli.length){
						oli[0].style.background = "#F33B43";
					}
					
					if(i==0){
						shou.style.display = "block";
			    		fenlei.style.display = "none";
			    		lingjuan.style.display = "none";
			    		zui.style.display = "none";
			    		denglu.style.display = "none";
					}
					if(i==1){
						shou.style.display = "none";
			    		fenlei.style.display = "block";
			    		lingjuan.style.display = "none";
			    		zui.style.display = "none";
			    		denglu.style.display = "none";
					}
					if(i==2){
						shou.style.display = "none";
			    		fenlei.style.display = "none";
			    		lingjuan.style.display = "block";
			    		zui.style.display = "none";
			    		denglu.style.display = "none";
					}
					if(i==3){
						shou.style.display = "none";
			    		fenlei.style.display = "none";
			    		lingjuan.style.display = "none";
			    		zui.style.display = "block";
			    		denglu.style.display = "none";
					}
					if(i==4){
						shou.style.display = "none";
			    		fenlei.style.display = "none";
			    		lingjuan.style.display = "none";
			    		zui.style.display = "none";
			    		denglu.style.display = "block";
					}
				}
				for(var j=0;j<oli.length;j++){
					oli[j].index = j;
					oli[j].onmouseover = function(){
						i= this.index;
						sp();
					}	
				}
				
			    	mian.onclick = function(){
			    		xiang.style.display = "none";
			    		zhuce.style.display = "block";
		    	    }
			    	shoufang.onclick = function(){
			    		shou.style.display = "none";
			    		shousuo.style.display = "block";
			    		bottom.style.display = "none";
		    	    }
			    	qu.onclick = function(){
			    		shousuo.style.display = "none";
			    		shou.style.display = "block";
			    		bottom.style.display = "block";
		    	    }
			    	xiangfan.onclick = function(){
			    		xiang.style.display = "none";
			    		denglu.style.display = "block";
			    		bottom.style.display = "block";
		    	    }
			    	
			    	var fengang = document.querySelector("#fengang");
			    	fengang.onclick = function(){
			    		fenlei.style.display = "none";
			    		shousuo.style.display = "block";
			    		bottom.style.display = "none";
                            console.log("s");
		    	    }
			    	
			    	fan.onclick = function(){
			    		zhuce.style.display = "none";
			    		xiang.style.display = "block";
		    	    }
			    	duan.onclick = function(){
			    		zhuce.style.display = "none";
			    		shouji.style.display = "block";
		    	    }
			    	s_fan.onclick = function(){
			    		shouji.style.display = "none";
			    		xiang.style.display = "block";
		    	    }
			    	he1.onclick = function(){
			    		shouji.style.display = "none";
			    		tian.style.display = "block";
		    	    }
			    	
			    	
			    	xia.onclick = function(){
			    		if(inp4.value==168983){
			    			console.log(inp4.value);
			    		}
                        
		    	    }
			    	
			    	
			    	deng.onclick = function(){
			    		if(inp1.value==15240652174&&inp2.value==123456){
			    			console.log(inp1.value);
			    		}
                        
		    	    }
			    	var bottom = document.querySelector(".bottom");
			    	
			    	var dl =document.querySelector(".dl");
			    	dl.onclick = function(){
			    		denglu.style.display = "none";
			    		xiang.style.display = "block";
			    		bottom.style.display = "none";
			    		console.log("hah");
			    		
			    	}
			    	
			    	var zhi= document.querySelector("#zhi");
			    	zhi.onclick = function(){
			    		zhi.style.display = "none";
			    	    shezhi.style.display = "block";
			    	    bottom.style.display = "none";
			    	}
			    	var yuan = document.querySelector(".yuan");
			    	var yuan2 = document.querySelector(".yuan2");
			    	yuan.onclick = function(){
			    		yuan.style.display = "none";
			    		yuan2.style.display = "block";
			    		}
			    	yuan2.onclick = function(){
			    		yuan2.style.display = "none";
			    		yuan.style.display = "block";
			    		}	
			    	var shifan = document.querySelector("#shifan");
			    		shifan.onclick = function(){
			    		shezhi.style.display = "none";
			    		zhi.style.display = "block";
			    		bottom.style.display = "block ";
			    		}	
	
			    	var list8 = document.querySelector(".list8");
				    var olis = list8.getElementsByTagName("li");
				    var box2 =  document.getElementsByTagName("#box2");
					function spp(){
					for(var j=0;j<olis.length;j++){
						if(j==i){
							olis[j].style.background = "white";
						}else{
							olis[j].style.background = "#F2F1EE";
						}
					}
					
			    	}
				for(var j=0;j<olis.length;j++){
					olis[j].index = j;
					olis[j].onmouseover = function(){
						i= this.index;
						spp();
					}	
				}
			    	
			    }
