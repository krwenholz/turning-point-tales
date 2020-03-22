TODAY=`date -u +"%Y_%m_%d"`

rm -f ~/Downloads/tpt_$TODAY.*

echo "Grabbing logs from 2020-01-01 to $TODAY"
AWS_REGION=us-west-2 AWS_PROFILE=h2wib-production awslogs get "our_first_big_thing-production" --no-group --no-stream --start="2020-01-01" -f="H2WIB_REQUEST_LOG" > ~/Downloads/tpt_$TODAY.log

echo "Logs fetched"
echo "Parsing those logs"

rm -f ~/Downloads/invalid_requests ~/Downloads/debug && LANG="en_US.UTF-8" goaccess --anonymize-ip --log-format='H2WIB_REQUEST_LOG: %h %^ %^ [%d:%t] "%r" %s %b "%R" "%u"' --time-format "%H:%M:%S %z" --date-format "%d/%b/%Y" --no-global-config --debug-file ~/Downloads/debug --invalid-requests ~/Downloads/invalid_requests --output ~/Downloads/tpt_$TODAY.html --config-file ~/goaccess.conf ~/Downloads/tpt_$TODAY.log

echo "Fin"
