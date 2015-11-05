angular.module("crmApp").controller("CustomerCtrl", function ($scope) {

    var entry = "";
    var total = 0;
    var operation = [];
    
    
    $scope.input = function (digit) {
        var n = digit;
        var o = entry;
        entry = o.toString() + n.toString();
        $scope.output = entry;
    }

    $scope.clr = function () {
        entry = "";
        $scope.output = "";
        total = 0;
        operation = [];
    }

    $scope.add = function () {
        $scope.op = "+";
        var op = [];
        op.entry = entry;
        op.operator = "+";
        operation.push(op);
        entry = "";
    }
    $scope.mul = function () {
        $scope.op = "*";
        var op = [];
        op.entry = entry;
        op.operator = "*";
        operation.push(op);
       entry = "";
    }
    $scope.sub = function () {
        $scope.op = "-";
        var op = [];
        op.entry = entry;
        op.operator = "-";
        operation.push(op);
        entry = "";
    }
    $scope.div = function () {
        $scope.op = "/";
        var op = [];
        op.entry = entry;
        op.operator = "/";
        operation.push(op);
        entry = "";
    }
    $scope.equals = function () {

        $scope.op = "=";
        var op = [];
        op.entry = entry;
        op.operator = "=";
        operation.push(op);
        entry = "";

        var tot = 0;
        var next_op = "";

        console.log(operation);
        for(var i in operation){

            
            if (next_op == "") {
                tot = parseFloat(operation[i].entry);                
            } else {
                switch (next_op) {
                    case "+":
                        tot = tot + parseFloat(operation[i].entry);
                        break;
                    case "-":
                        tot = tot - parseFloat(operation[i].entry);
                        break;
                    case "*":
                        tot = tot * parseFloat(operation[i].entry);
                        break;
                    case "/":
                        tot = tot / parseFloat(operation[i].entry);
                        break;
                    default: break;
                }
            }
            next_op = operation[i].operator;

        }
        $scope.output = tot;
        
        operation = [];
      
    }




});