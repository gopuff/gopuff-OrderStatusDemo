namespace OrderStatus

open Microsoft.AspNetCore.Mvc
open Microsoft.AspNetCore.Http
open Microsoft.Azure.WebJobs
open Microsoft.Azure.WebJobs.Extensions.Http
open Microsoft.Extensions.Logging

module LoggingConstants = 
  module Events = 
    let OrderLookup = EventId(0, "OrderView")

  let Template = "User Looked up Order"   

module Api =

  type Result = { status: string; body: string }

  [<FunctionName("orderstatus")>]
  let vieworder([<HttpTrigger(AuthorizationLevel.Anonymous, "get")>] req: HttpRequest, log: ILogger) =
    log.LogInformation(LoggingConstants.Events.OrderLookup,
      LoggingConstants.Template)
    
    JsonResult({status = "ok"; body="done"})
