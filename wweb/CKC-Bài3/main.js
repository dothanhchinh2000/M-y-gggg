
        // code js
        function showResult() {
            var x;
            x = 5 + 6;
            document.getElementById("demo").innerHTML = x;
        }
        function changeColorAndFontSize() {
             //c1 using javascript to change font size and color
             document.getElementById("text").style.fontSize = "100px";
             document.getElementById("text").style.color = "blue";
            // c2 using jquery 
            //$('#text').css('font-size','50px');
            //$("#text").css("color", "red");
        }
        function showInformation() {
            // c1 using javascript
            // luc lam bai thi chi can su dung 1 cach la javascript hoac jquery
            //b1 lay thong tin tu input last name & fist name: javascript get value input
            var firstName = document.getElementById("fname").value;
            var lastName = document.getElementById("lname").value;
            //b2 noi 2 thong tin last name va first name
            var fullName = firstName + " " + lastName;
            //b3 show ket qua ra thong bao: alert information
            alert(fullName);
        }
        
        
        const button = document.querySelector('.btn-random');
        button.addEventListener('click',changeColor);            
        function changeColor(){
            const background = document.querySelector('.background');
            const arrayColor = ['red','yellow','pink','gray','black','orange','blue'];
            let random = arrayColor[randomColor(arrayColor)];
            background.style.backgroundColor = random;
            console.log(random);
        }
        function randomColor(array){
             return Math.floor(Math.random()*array.length);
        }


        var addBtn = $('#addUser'),
    removeBtns = $('.removeItem');

var options = {
   valueNames: [
      { data: ['id'] },
     'itemId',
      { attr: 'value', name: 'name' },
      { attr: 'value', name: 'born' },
      { attr: 'data-value', name: 'device'},
      { attr: 'value', name: 'joinAt'}
  ],
  item: `<tr class="id" data-id="">
      <td><span class="itemId"></span></td>
      <td><input class="name form-control" value=""></td>
      <td><input class="born form-control" value=""></td>
      <td>
        <select class="device form-control" name="device[]">
          <option class="deviceType" data-value="iOS">iOS</option>
          <option class="deviceType" value="android">Android</option>
        </select>
      </td>
      <td>
        <div class='input-group date datetimepicker' style="position: relative">
          <input type="text" class="joinAt form-control" value=""/>
          <span class="input-group-addon">
            <span class="glyphicon glyphicon-calendar"></span>
          </span>
        </div>
      </td>
      <td class="remove">
        <button class="removeItem btn btn-xs btn-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
      </td>
    </tr>`
};

// Prepare initial user data
var values = [{
    id: 1,
    itemId: '#1',
    name: 'Jonny Strömberg',
    born: 1986,
    device: 'iOS',
    joinAt: '2017-01-13 00:17:49'
  },
  {
    id: 2,
    itemId: '#2',
    name: 'Jonas Arnklint',
    born: 1985,
    device: 'iOS',
    joinAt: '2017-12-29 13:17:49'
  },
  {
    id: 3,
    itemId: '#3',
    name: 'Martina Elm',
    born: 1986,
    device: 'android',
    joinAt: '2018-04-03 02:17:49'
}];

// Create user list
var userList = new List('users', options, values);

// Add one more item into list
userList.add({
  id: 4,
  itemId: '#4',
  name: "Gustaf Lindqvist",
  born: 1983,
  device: 'android',
  joinAt: '2018-04-03 10:17:49'
});

// Get size of list (except headers)
var size = userList.size();

// Sets callbacks to the buttons and other elements in the list
refreshCallbacks();

function refreshCallbacks() {
  // Trigger event for new generated row/object
  removeBtns = $(removeBtns.selector);
    removeBtns.click(function() {
    var itemId = $(this).closest('tr').data('id');
    userList.remove('id', itemId);
  });
  
  // Re-set device of each select
  let deviceOptions = $('.deviceType');
  deviceOptions.each(function() {
    let parentSelect = $(this).closest('select').data('value');
    if (parentSelect === this.value) {
      $(this).attr('selected','selected'); 
    }
  });
  
  // Add Datetime Picker
  $('.datetimepicker').datetimepicker({
    format: 'YYYY-MM-DD HH:mm:ss'
  });
}

// Add new blank row into tables if click button Add
addBtn.click(function() {
  userList.add({
    id: ++size,
    itemId: `#${size}`,
    name: "",
    born: "",
    joinAt: ""
  });
  refreshCallbacks();
});


function getAttributes()
        {
            var u = document.getElementById("somelink").href;
            alert('The value of the href attribute of the link is : '+u);
            var v = document.getElementById("somelink").hreflang;   
            alert('The value of the hreflang attribute of the link is : '+v);
            var w = document.getElementById("somelink").rel; 
            alert('The value of the rel attribute of the link is : '+w);
            var x = document.getElementById("somelink").target; 
            alert('The value of the taget attribute of the link is : '+x);
            var y = document.getElementById("somelink").type; 
             alert('The value of the type attribute of the link is : '+y);  
        }
        



        document.querySelector('#btn11').onclick = function() {
          document.querySelector('#demo').style.fontSize = '100px';
          document.querySelector('#demo').style.color = "red";
      }
      
      
      document.querySelector('#btnName').onclick = function() {
          var firstname = document.querySelector('#firstname').value;
          var lastname = document.querySelector('#lastname').value;
      
          alert(firstname + lastname);
      }
      
      document.querySelector('#btnChangeColor').onclick = function() {
          document.querySelector('body').style.background = 'red';
      
      }
      
      function getAttributes() {
          var u = document.getElementById("w3r").href;
          alert(u);
          var v = document.getElementById("w3r").hreflang;
          alert(v);
          var w = document.getElementById("w3r").rel;
          alert(w);
          var x = document.getElementById("w3r").target;
          alert(x);
          var y = document.getElementById("w3r").type;
          alert(y);
      }
      
      document.querySelector('#themhang').onclick = function() {
          var tableRef = document.getElementById('bang').getElementsByTagName('tbody')[0];
          var newRow = tableRef.insertRow(tableRef.rows.length);
          var newCell = newRow.insertCell(0);
          var newCell1 = newRow.insertCell(1);
          var newText = document.createTextNode('New row');
          var newText1 = document.createTextNode('New row');
          newCell.appendChild(newText);
          newCell1.appendChild(newText1);
      }
      document.querySelector('#taoBang').onclick =
      
          function tableCreate() {
              var body = document.querySelector('#MYbang1'),
                  tbl = document.createElement('table');
              tbl.style.width = '100px';
              tbl.style.border = '1px solid black';
      
              for (var i = 0; i < 5; i++) {
                  var tr = tbl.insertRow();
                  for (var j = 0; j < 3; j++) {
                      if (i == 2 && j == 1) {
                          break;
                      } else {
                          var td = tr.insertCell();
                          td.appendChild(document.createTextNode('Cell'));
                          td.style.border = '1px solid black';
                          if (i == 1 && j == 1) {
                              td.setAttribute('rowSpan', '2');
                          }
                      }
                  }
              }
              body.appendChild(tbl);
          }
      
      
      
      
          $(function() {
            $('#xoa').bind("click", function() {
                $('#colorSelect option:selected').remove();
            });
        });
        
        $(document).ready(function() {
            var size_width = $(window).width();
            $('#size_width strong#result').text(size_width + 'px');
            $(window).resize(function() {
                size_width = $(window).width();
                $('#size_width strong#result').text(size_width + 'px');
            });
        });
        
        
        document.querySelector('#changecontent').onclick = function() {
            document.getElementById('cell1').innerHTML = 'hello';
            document.getElementById('cell2').innerHTML = 'hello';
            document.getElementById('cell3').innerHTML = 'hello';
            document.getElementById('cell4').innerHTML = 'hello';
        }
      
      function fetch_api() {
          var promise = axios({
              url: "https://jsonplaceholder.typicode.com/users", //lấy danh sách sinh viên từ đường dẩn sever(back-end cung cấp)
              method: "GET", //giao thức back-end cung cấp
              responseType: "json",
          });
          promise.then(function(result) {
              console.log("result", result.data);
              // sao khi lấy dử liệu xong sẻ lấy dử liệu ra dom
              renderTableDoiTuong(result.data)
      
          });
      
          //xử lý thất bại
      
          promise.catch(function(error) {
              console.log("lỗi", error);
          });
      }
      
      