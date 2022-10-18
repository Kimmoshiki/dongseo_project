        //로그인 버튼 누르면 함수를 실행하여 아래 내용 실행하기

        function login_Check(){
            //사용자가 입력한 데이터(아이디, 패스워드)변수에 담는다.
            let id = document.getElementById('id').value;
            let pw = document.getElementById('pw').value;
    
            console.log(id,pw);
    
            //2. 조건문을 활용하여 아이디 'marster' 패스워드 '1234'일때 '인증성공', 틀리면 '인증실패 다시 확인하세요'
            if(id=='marster'){
                if(pw=='1234'){
                    alert('인증성공');
                }else{
                    alert('패스워드가 틀립니다. 다시 확인하세요.');
                }
            }else{
                alert('아이디가 틀립니다. 다시 확인하세요');
            }
            }