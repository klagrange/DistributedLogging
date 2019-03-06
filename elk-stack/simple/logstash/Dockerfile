FROM docker.elastic.co/logstash/logstash:6.5.4
RUN rm -f /usr/share/logstash/pipeline/logstash.conf
ADD pipeline/ /usr/share/logstash/pipeline/
ADD event-data/ /usr/share/logstash/event-data
