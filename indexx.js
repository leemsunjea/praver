    // let apiKey = '';

    // $(document).ready(function () {
    //   $('#loading').hide();
    // });
    // document.addEventListener('DOMContentLoaded', () => {
    //   // 서버에서 API 키를 가져오는 방법을 사용해야 합니다.
    //   fetch('/get-api-key')
    //     .then(response => response.json())
    //     .then(data => {
    //       apiKey = data.apiKey;
    //       console.log('API Key:', apiKey);
    //       // API 키를 사용하는 로직을 추가합니다.
    //     });
    // });

    // function chatGPT() {
    //   //const api_key = ""  // <- API KEY 입력
      
    //   const keywords = document.getElementById('keywords').value
    //   $('#loading').show();

    //   const prompt = "\n\n 지금부터 앞의 질문에 어떻게 대답해야할지 말씀드릴게요. 아래 사항을 모두 읽고 따라주세요.\n"
    //                   + "1. 50자 이내로 대답하세요.\n"
    //                   + "2. 친절하게 대답하세요.\n";
     
    //   const messages = [
    //     { role: 'user', content: keywords + prompt },
    //   ]

    //   const data = {
    //     model: 'gpt-3.5-turbo',
    //     messages: messages,
    //     max_tokens: 1000, // 응답받을 메시지 최대 토큰(단어) 수 설정
    //     top_p: 1, // 토큰 샘플링 확률을 설정
    //     frequency_penalty: 0.5, // 일반적으로 나오지 않는 단어를 억제하는 정도
    //     presence_penalty: 0.5, // 동일한 단어나 구문이 반복되는 것을 억제하는 정도
    //     temperature: 0.5,
    //   }

    //   $.ajax({
    //     url: "https://api.openai.com/v1/chat/completions",
    //     method: 'POST',
    //     headers: {
    //       Authorization: "Bearer " + apiKey,
    //       'Content-Type': 'application/json',
    //     },
    //     data: JSON.stringify(data),
    //   }).then(function (response) {
    //     $('#loading').hide();
    //     console.log(response)
    //     let result = document.getElementById('result')
    //     let pre = document.createElement('pre')

    //     pre.innerHTML = "\n\n" + response.choices[0].message.content
    //     result.appendChild(pre)

    //     document.getElementById('keywords').value = ''
    //   });
    // }