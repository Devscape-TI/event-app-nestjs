import { PublishCommand } from '@aws-sdk/client-sns';
import { IMessagePublisherProvider } from '../../message-publisher-provider.interface';
import { snsClient } from 'src/lib/aws/sns-client.lib';

// doc implement aws: https://docs.aws.amazon.com/pt_br/sns/latest/dg/example_sns_Publish_section.html
// github aws implemente: https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/sns#code-examples
export class PublisherTopicSnsAwsProvider implements IMessagePublisherProvider {
  async execute(event: string, payload: any) {
    const params = {
      Message: JSON.stringify(payload), // MESSAGE_TEXT
      TopicArn: 'arn:aws:sns:us-east-1:468142523818:created_user_topic', //TOPIC_ARN
    };
    try {
      const data = await snsClient.send(new PublishCommand(params));
      console.log('Success.', data);
    } catch (err) {
      console.log('Error', err.stack);
    }
  }
}
