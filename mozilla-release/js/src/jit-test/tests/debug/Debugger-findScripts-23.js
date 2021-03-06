// If a script is (re)lazified, findScripts should not delazify it.

var dbg = new Debugger();

var g = newGlobal();
g.eval('function f(){}');
assertEq(g.eval('isLazyFunction(f)'), true);

dbg.addDebuggee(g);
dbg.findScripts();
assertEq(g.eval('isLazyFunction(f)'), true);

dbg.removeAllDebuggees();
relazifyFunctions();
assertEq(g.eval('isLazyFunction(f)'), true);

dbg.addDebuggee(g);
var scripts = dbg.findScripts();
assertEq(g.eval('isLazyFunction(f)'), true);
