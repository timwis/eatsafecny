(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['detail'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=helpers.helperMissing;

  return "<table class=\"table table-bordered table-hover\">\n  <tr><td>Facility name</td><td><strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.operation_name : stack1), depth0))
    + "<strong></td></tr>\n  <tr><td>Shareable link</td><td><a title=\"Copy this link to share results\" href=\"http://eatsafecny.org/?id="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.nys_health_operation_id : stack1), depth0))
    + "\">http://eatsafecny.org/?id="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.nys_health_operation_id : stack1), depth0))
    + "</a></td></tr>\n  <tr><td>Address</td><td><a title=\"Opens in Google Maps\" target=\"_blank\" href=\"https://www.google.com/maps/place/"
    + ((stack1 = (helpers.makeAddressString || (depth0 && depth0.makeAddressString) || alias3).call(depth0,(depth0 != null ? depth0.Details : depth0),{"name":"makeAddressString","hash":{},"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.makeAddressString || (depth0 && depth0.makeAddressString) || alias3).call(depth0,(depth0 != null ? depth0.Details : depth0),{"name":"makeAddressString","hash":{},"data":data})) != null ? stack1 : "")
    + "</a></td></tr>\n  <tr><td>Inspection Date</td><td>"
    + ((stack1 = (helpers.formatDate || (depth0 && depth0.formatDate) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.date : stack1),{"name":"formatDate","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n  <tr><td>Critical violations</td><td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.total_critical_violations : stack1), depth0))
    + "</td></tr>\n  <tr><td>Critical &amp; not corrected</td><td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.total_crit_not_corrected : stack1), depth0))
    + "</td></tr>\n  <tr><td>Inspction Details</td><td>"
    + ((stack1 = (helpers.highlightCritical || (depth0 && depth0.highlightCritical) || alias3).call(depth0,((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.violations : stack1),{"name":"highlightCritical","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n</table>";
},"useData":true});
})();