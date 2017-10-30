// ��������
var express = require('express');
var utility = require('utility');

// ���� express ʵ��
var app = express();

app.get('/', function (req, res) {
  // �� req.query ��ȡ�����ǵ� q ������
  // ����� post ������ body ���ݣ������� req.body ���棬���� express Ĭ�ϲ����� body �е���Ϣ����Ҫ���� https://github.com/expressjs/body-parser ����м���Żᴦ���������ὲ����
  // ����ֲ���ʲô�� query��ʲô�� body �Ļ����Ǿ���Ҫ��һ�� http ��֪ʶ��
  var q = req.query.q;

  // ���� utility.md5 �������õ� md5 ֮���ֵ
  var md5Value = utility.md5(q);

  res.send(md5Value);
});

app.listen(3000, function (req, res) {
  console.log('app is running at port 3000');
});