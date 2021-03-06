import 'source-map-support/register'
import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import {getUserId} from '../utils';
import {deleteItem} from '../../businessLogic/itemService';
import { createLogger } from '../../utils/logger'

const logger = createLogger('deleteItem')

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const itemId = event.pathParameters.itemId
  const userId = getUserId(event);
  
  // TODO: Remove a listing item by id
  logger.info(itemId);
  
  console.log('ItemId: ', itemId);
  console.log('userId: ', userId)
  await deleteItem(itemId, userId);
  
  logger.info('Deleted the listing item with id ', itemId);

  return {
    statusCode: 200,
    headers:{
      'Access-Control-Allow-Origin': '*'
    },
    body: null
  }
}
