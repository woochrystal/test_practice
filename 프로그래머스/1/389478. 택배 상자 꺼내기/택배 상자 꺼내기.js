function solution(n, w, num) {
            
            // w가 몇개인지
            // console.log(22/6)
            // var all = n%w;
            // var select = num%w;
            var all = n/w;
            var select = num/w;

            var all_fl = Math.ceil(all);//총 몇층
            var this_fl = Math.ceil(select);//선택박스 층
            
            var all_fn =  n % w;//끝
            var this_fn = num % w;//선택 위치

            if(all_fn == 0){
                all_fn = w;
            }
            if(this_fn == 0){
                this_fn = w;
            }

            var rv_this_fn = w - this_fn + 1;

            // console.log(w, this_fn, rv_this_fn,'역순')
            // console.log(all_fn, this_fn,'순서')
            console.log(all_fn, rv_this_fn,'순서')
            // console.log(all_fl, this_fl,'층')

            var answer = all_fl - this_fl;

            if(all_fl == this_fl){//층 같을때
                return 1;
            }else{//층 다를때

                if(all_fl % 2 == 1){//총 홀수일때
                    if(this_fl % 2 == 1){//해당 층 수 홀수
                        if(all_fn >= this_fn){
                            console.log('홀 + 홀 위에있음')
                            answer = (all_fl - this_fl) + 1;
                        }else{
                            console.log('홀 + 홀 위에없음')
                        }
                    }else{
                        if(all_fn >= rv_this_fn){
                            console.log('홀 + 짝 위에있음')
                            answer = (all_fl - this_fl) + 1;
                        }else{
                            console.log('홀 + 짝 위에없음')
                        }
                    }
    
                }else{
                    if(this_fl % 2 == 1){//해당 층 수 홀수
                        if(all_fn >= rv_this_fn){
                            console.log('짝 + 홀 위에있음')
                            answer = (all_fl - this_fl) + 1;
                        }else{
                            console.log('짝 + 홀 위에없음')
                        }
                    }else{
                        if(all_fn >= this_fn){
                            console.log('짝 + 짝 위에있음')
                            answer = (all_fl - this_fl) + 1;
                        }else{
                            console.log('짝 + 짝 위에없음')
                        }
                    }
                }
            }
            return answer;
        }