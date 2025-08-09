import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class SinkKafka extends pulumi.CustomResource {
    /**
     * Get an existing SinkKafka resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SinkKafkaState, opts?: pulumi.CustomResourceOptions): SinkKafka;
    /**
     * Returns true if the given object is an instance of SinkKafka.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SinkKafka;
    /**
     * The cluster to maintain this sink.
     */
    readonly clusterName: pulumi.Output<string>;
    /**
     * Comment on an object in the database.
     */
    readonly comment: pulumi.Output<string | undefined>;
    /**
     * The type of compression to apply to messages before they are sent to Kafka.
     */
    readonly compressionType: pulumi.Output<string | undefined>;
    /**
     * The identifier for the sink database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    readonly databaseName: pulumi.Output<string | undefined>;
    /**
     * How to interpret records (e.g. Debezium, Upsert).
     */
    readonly envelope: pulumi.Output<outputs.SinkKafkaEnvelope | undefined>;
    /**
     * How to decode raw bytes from different formats into data structures it can understand at runtime.
     */
    readonly format: pulumi.Output<outputs.SinkKafkaFormat | undefined>;
    /**
     * The name of the source, table or materialized view you want to send to the sink.
     */
    readonly from: pulumi.Output<outputs.SinkKafkaFrom>;
    /**
     * The name of a column containing additional headers to add to each message emitted by the sink. The column must be of
     * type map[text => text] or map[text => bytea].
     */
    readonly headers: pulumi.Output<string | undefined>;
    /**
     * The name of the Kafka connection to use in the sink.
     */
    readonly kafkaConnection: pulumi.Output<outputs.SinkKafkaKafkaConnection>;
    /**
     * Disable Materialize's validation of the key's uniqueness.
     */
    readonly keyNotEnforced: pulumi.Output<boolean | undefined>;
    /**
     * An optional list of columns to use for the Kafka key. If unspecified, the Kafka key is left unset.
     */
    readonly keys: pulumi.Output<string[] | undefined>;
    /**
     * The identifier for the sink.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The owernship role of the object.
     */
    readonly ownershipRole: pulumi.Output<string>;
    /**
     * A SQL expression used to partition the data in the Kafka sink. Can only be used with `ENVELOPE UPSERT`.
     */
    readonly partitionBy: pulumi.Output<string | undefined>;
    /**
     * The fully qualified name of the sink.
     */
    readonly qualifiedSqlName: pulumi.Output<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    readonly region: pulumi.Output<string>;
    /**
     * The identifier for the sink schema in Materialize. Defaults to `public`.
     */
    readonly schemaName: pulumi.Output<string | undefined>;
    readonly sinkKafkaId: pulumi.Output<string>;
    /**
     * The size of the cluster maintaining this sink.
     */
    readonly size: pulumi.Output<string>;
    /**
     * Whether to emit the consolidated results of the query before the sink was created at the start of the sink.
     */
    readonly snapshot: pulumi.Output<boolean | undefined>;
    /**
     * The Kafka topic you want to subscribe to.
     */
    readonly topic: pulumi.Output<string>;
    /**
     * Any topic-level configs to use when creating the Kafka topic (if the Kafka topic does not already exist).
     */
    readonly topicConfig: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The partition count to use when creating the Kafka topic (if the Kafka topic does not already exist).
     */
    readonly topicPartitionCount: pulumi.Output<number | undefined>;
    /**
     * The replication factor to use when creating the Kafka topic (if the Kafka topic does not already exist).
     */
    readonly topicReplicationFactor: pulumi.Output<number | undefined>;
    /**
     * Create a SinkKafka resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SinkKafkaArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SinkKafka resources.
 */
export interface SinkKafkaState {
    /**
     * The cluster to maintain this sink.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The type of compression to apply to messages before they are sent to Kafka.
     */
    compressionType?: pulumi.Input<string>;
    /**
     * The identifier for the sink database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * How to interpret records (e.g. Debezium, Upsert).
     */
    envelope?: pulumi.Input<inputs.SinkKafkaEnvelope>;
    /**
     * How to decode raw bytes from different formats into data structures it can understand at runtime.
     */
    format?: pulumi.Input<inputs.SinkKafkaFormat>;
    /**
     * The name of the source, table or materialized view you want to send to the sink.
     */
    from?: pulumi.Input<inputs.SinkKafkaFrom>;
    /**
     * The name of a column containing additional headers to add to each message emitted by the sink. The column must be of
     * type map[text => text] or map[text => bytea].
     */
    headers?: pulumi.Input<string>;
    /**
     * The name of the Kafka connection to use in the sink.
     */
    kafkaConnection?: pulumi.Input<inputs.SinkKafkaKafkaConnection>;
    /**
     * Disable Materialize's validation of the key's uniqueness.
     */
    keyNotEnforced?: pulumi.Input<boolean>;
    /**
     * An optional list of columns to use for the Kafka key. If unspecified, the Kafka key is left unset.
     */
    keys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The identifier for the sink.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * A SQL expression used to partition the data in the Kafka sink. Can only be used with `ENVELOPE UPSERT`.
     */
    partitionBy?: pulumi.Input<string>;
    /**
     * The fully qualified name of the sink.
     */
    qualifiedSqlName?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the sink schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    sinkKafkaId?: pulumi.Input<string>;
    /**
     * The size of the cluster maintaining this sink.
     */
    size?: pulumi.Input<string>;
    /**
     * Whether to emit the consolidated results of the query before the sink was created at the start of the sink.
     */
    snapshot?: pulumi.Input<boolean>;
    /**
     * The Kafka topic you want to subscribe to.
     */
    topic?: pulumi.Input<string>;
    /**
     * Any topic-level configs to use when creating the Kafka topic (if the Kafka topic does not already exist).
     */
    topicConfig?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The partition count to use when creating the Kafka topic (if the Kafka topic does not already exist).
     */
    topicPartitionCount?: pulumi.Input<number>;
    /**
     * The replication factor to use when creating the Kafka topic (if the Kafka topic does not already exist).
     */
    topicReplicationFactor?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a SinkKafka resource.
 */
export interface SinkKafkaArgs {
    /**
     * The cluster to maintain this sink.
     */
    clusterName?: pulumi.Input<string>;
    /**
     * Comment on an object in the database.
     */
    comment?: pulumi.Input<string>;
    /**
     * The type of compression to apply to messages before they are sent to Kafka.
     */
    compressionType?: pulumi.Input<string>;
    /**
     * The identifier for the sink database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or
     * `materialize` if environment variable is not set.
     */
    databaseName?: pulumi.Input<string>;
    /**
     * How to interpret records (e.g. Debezium, Upsert).
     */
    envelope?: pulumi.Input<inputs.SinkKafkaEnvelope>;
    /**
     * How to decode raw bytes from different formats into data structures it can understand at runtime.
     */
    format?: pulumi.Input<inputs.SinkKafkaFormat>;
    /**
     * The name of the source, table or materialized view you want to send to the sink.
     */
    from: pulumi.Input<inputs.SinkKafkaFrom>;
    /**
     * The name of a column containing additional headers to add to each message emitted by the sink. The column must be of
     * type map[text => text] or map[text => bytea].
     */
    headers?: pulumi.Input<string>;
    /**
     * The name of the Kafka connection to use in the sink.
     */
    kafkaConnection: pulumi.Input<inputs.SinkKafkaKafkaConnection>;
    /**
     * Disable Materialize's validation of the key's uniqueness.
     */
    keyNotEnforced?: pulumi.Input<boolean>;
    /**
     * An optional list of columns to use for the Kafka key. If unspecified, the Kafka key is left unset.
     */
    keys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The identifier for the sink.
     */
    name?: pulumi.Input<string>;
    /**
     * The owernship role of the object.
     */
    ownershipRole?: pulumi.Input<string>;
    /**
     * A SQL expression used to partition the data in the Kafka sink. Can only be used with `ENVELOPE UPSERT`.
     */
    partitionBy?: pulumi.Input<string>;
    /**
     * The region to use for the resource connection. If not set, the default region is used.
     */
    region?: pulumi.Input<string>;
    /**
     * The identifier for the sink schema in Materialize. Defaults to `public`.
     */
    schemaName?: pulumi.Input<string>;
    sinkKafkaId?: pulumi.Input<string>;
    /**
     * Whether to emit the consolidated results of the query before the sink was created at the start of the sink.
     */
    snapshot?: pulumi.Input<boolean>;
    /**
     * The Kafka topic you want to subscribe to.
     */
    topic: pulumi.Input<string>;
    /**
     * Any topic-level configs to use when creating the Kafka topic (if the Kafka topic does not already exist).
     */
    topicConfig?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The partition count to use when creating the Kafka topic (if the Kafka topic does not already exist).
     */
    topicPartitionCount?: pulumi.Input<number>;
    /**
     * The replication factor to use when creating the Kafka topic (if the Kafka topic does not already exist).
     */
    topicReplicationFactor?: pulumi.Input<number>;
}
